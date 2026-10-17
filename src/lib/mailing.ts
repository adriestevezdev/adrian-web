import { getSiteUrl } from "@/config/funnel";
import { buildConfirmEmail } from "@/emails/confirm";
import { renderEmail, textToParagraphs } from "@/emails/render";
import { buildWelcomeEmail } from "@/emails/welcome";
import { query, withAdvisoryLock } from "@/lib/db";
import { BATCH_SIZE, sendEmail, sendEmailBatch, type OutgoingEmail } from "@/lib/email";
import type { Lead } from "@/lib/leads";

const WELCOME_KEY = "bienvenida";
const CONFIRM_KEY = "confirmacion";
const BROADCAST_LOCK_BASE = 4971000;
// Resend permite 2 llamadas por segundo por defecto
const PAUSE_BETWEEN_BATCHES_MS = 600;

export interface Broadcast {
  id: number;
  subject: string;
  body: string;
  sent_at: Date | null;
  created_at: Date;
}

export interface BroadcastWithStats extends Broadcast {
  delivered: number;
  failed: number;
}

export function broadcastKey(id: number) {
  return `envio-${id}`;
}

export function buildLeadUrls(lead: Pick<Lead, "token">) {
  const siteUrl = getSiteUrl();
  const token = encodeURIComponent(lead.token);
  return {
    confirmUrl: `${siteUrl}/confirmar?t=${token}`,
    unsubscribeUrl: `${siteUrl}/baja?t=${token}`,
    oneClickUnsubscribeUrl: `${siteUrl}/api/unsubscribe?t=${token}`,
    whatsappUrl: (source: string) => `${siteUrl}/wa?t=${token}&src=${encodeURIComponent(source)}`,
  };
}

// Reserva el envío en email_log (UNIQUE lead_id + email_key) para que nunca salga dos veces
async function claimSend(leadIds: number[], emailKey: string) {
  if (leadIds.length === 0) return new Set<number>();
  const rows = await query<{ lead_id: number }>(
    `INSERT INTO email_log (lead_id, email_key)
     SELECT unnest($1::int[]), $2
     ON CONFLICT (lead_id, email_key) DO NOTHING
     RETURNING lead_id`,
    [leadIds, emailKey],
  );
  return new Set(rows.map((row) => row.lead_id));
}

async function recordResult(leadId: number, emailKey: string, result: { id: string | null; error: string | null }) {
  await query("UPDATE email_log SET provider_id = $3, error = $4, sent_at = now() WHERE lead_id = $1 AND email_key = $2", [
    leadId,
    emailKey,
    result.id,
    result.error,
  ]);
}

// Como mucho un email de confirmación al día por persona: quien lo perdió puede volver a pedirlo,
// pero el formulario no sirve para llenar de emails la bandeja de otro
export async function sendConfirmationEmail(lead: Lead) {
  const emailKey = `${CONFIRM_KEY}-${new Date().toISOString().slice(0, 10)}`;
  const claimed = await claimSend([lead.id], emailKey);
  if (!claimed.has(lead.id)) return;

  const urls = buildLeadUrls(lead);
  const content = buildConfirmEmail({ confirmUrl: urls.confirmUrl, returning: Boolean(lead.unsubscribed_at) });
  const email = renderEmail(content, urls.unsubscribeUrl);
  const result = await sendEmail({ to: lead.email, ...email, unsubscribeUrl: urls.oneClickUnsubscribeUrl });
  await recordResult(lead.id, emailKey, result);
  if (result.error) {
    console.error(`[email] Error enviando la confirmación a ${lead.email}: ${result.error}`);
  }
}

export async function sendWelcomeEmail(lead: Lead) {
  const claimed = await claimSend([lead.id], WELCOME_KEY);
  if (!claimed.has(lead.id)) return;

  const urls = buildLeadUrls(lead);
  const email = renderEmail(buildWelcomeEmail({ whatsappUrl: urls.whatsappUrl("email-bienvenida") }), urls.unsubscribeUrl);
  const result = await sendEmail({ to: lead.email, ...email, unsubscribeUrl: urls.oneClickUnsubscribeUrl });
  await recordResult(lead.id, WELCOME_KEY, result);
  if (result.error) {
    console.error(`[email] Error enviando la bienvenida a ${lead.email}: ${result.error}`);
  }
}

function buildBroadcastEmail(broadcast: Pick<Broadcast, "subject" | "body">, lead: Pick<Lead, "email" | "token">): OutgoingEmail {
  const urls = buildLeadUrls(lead);
  const email = renderEmail({ subject: broadcast.subject, paragraphs: textToParagraphs(broadcast.body) }, urls.unsubscribeUrl);
  return { to: lead.email, ...email, unsubscribeUrl: urls.oneClickUnsubscribeUrl };
}

export async function listBroadcasts() {
  return query<BroadcastWithStats>(
    `SELECT b.*,
            COUNT(e.id) FILTER (WHERE e.error IS NULL AND e.provider_id IS NOT NULL)::int AS delivered,
            COUNT(e.id) FILTER (WHERE e.error IS NOT NULL)::int AS failed
       FROM broadcasts b
       LEFT JOIN email_log e ON e.email_key = 'envio-' || b.id
      GROUP BY b.id
      ORDER BY b.created_at DESC`,
  );
}

export async function getBroadcast(id: number) {
  const rows = await query<Broadcast>("SELECT * FROM broadcasts WHERE id = $1", [id]);
  return rows[0] ?? null;
}

export async function saveBroadcast(id: number | null, subject: string, body: string) {
  if (id) {
    const rows = await query<Broadcast>(
      "UPDATE broadcasts SET subject = $2, body = $3 WHERE id = $1 AND sent_at IS NULL RETURNING *",
      [id, subject, body],
    );
    return rows[0] ?? null;
  }
  const rows = await query<Broadcast>("INSERT INTO broadcasts (subject, body) VALUES ($1, $2) RETURNING *", [subject, body]);
  return rows[0];
}

export async function deleteBroadcast(id: number) {
  await query("DELETE FROM broadcasts WHERE id = $1 AND sent_at IS NULL", [id]);
}

// Prueba: se envía a una dirección cualquiera con enlaces de baja que no afectan a nadie de la lista
export async function sendBroadcastTest(broadcast: Broadcast, to: string) {
  return sendEmail(buildBroadcastEmail(broadcast, { email: to, token: "prueba" }));
}

// Envía el email a toda la lista que aún no la ha recibido. Se puede relanzar: solo reintenta
// los fallidos y los que falten, nunca repite a quien ya la recibió.
export async function sendBroadcast(broadcast: Broadcast) {
  const emailKey = broadcastKey(broadcast.id);

  const result = await withAdvisoryLock(BROADCAST_LOCK_BASE + broadcast.id, async () => {
    await query("DELETE FROM email_log WHERE email_key = $1 AND error IS NOT NULL", [emailKey]);

    const recipients = await query<Lead>(
      `SELECT l.* FROM leads l
        WHERE l.confirmed_at IS NOT NULL
          AND l.unsubscribed_at IS NULL
          AND l.converted_at IS NULL
          AND NOT EXISTS (SELECT 1 FROM email_log e WHERE e.lead_id = l.id AND e.email_key = $1)
        ORDER BY l.created_at`,
      [emailKey],
    );

    let sent = 0;
    let failed = 0;

    for (let start = 0; start < recipients.length; start += BATCH_SIZE) {
      const chunk = recipients.slice(start, start + BATCH_SIZE);
      const claimed = await claimSend(
        chunk.map((lead) => lead.id),
        emailKey,
      );
      const toSend = chunk.filter((lead) => claimed.has(lead.id));
      if (toSend.length === 0) continue;

      const results = await sendEmailBatch(toSend.map((lead) => buildBroadcastEmail(broadcast, lead)));
      for (const [index, lead] of toSend.entries()) {
        await recordResult(lead.id, emailKey, results[index]);
        if (results[index].error) failed++;
        else sent++;
      }

      if (start + BATCH_SIZE < recipients.length) {
        await new Promise((resolve) => setTimeout(resolve, PAUSE_BETWEEN_BATCHES_MS));
      }
    }

    await query("UPDATE broadcasts SET sent_at = COALESCE(sent_at, now()) WHERE id = $1", [broadcast.id]);
    return { sent, failed };
  });

  return result ?? { sent: 0, failed: 0, busy: true };
}
