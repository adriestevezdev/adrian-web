const RESEND_API_URL = "https://api.resend.com";
// Resend admite hasta 100 emails por llamada al endpoint de lotes
export const BATCH_SIZE = 100;

export interface OutgoingEmail {
  to: string;
  subject: string;
  html: string;
  text: string;
  unsubscribeUrl: string;
}

export interface SendEmailResult {
  id: string | null;
  error: string | null;
}

function toResendPayload(email: OutgoingEmail, from: string) {
  return {
    from,
    to: [email.to],
    reply_to: process.env.EMAIL_REPLY_TO || undefined,
    subject: email.subject,
    html: email.html,
    text: email.text,
    headers: {
      "List-Unsubscribe": `<${email.unsubscribeUrl}>`,
      "List-Unsubscribe-Post": "List-Unsubscribe=One-Click",
    },
  };
}

async function callResend(path: string, body: unknown) {
  const response = await fetch(`${RESEND_API_URL}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data?.message || `Resend respondió ${response.status}`);
  }
  return data;
}

function getSender() {
  const from = process.env.EMAIL_FROM;
  return process.env.RESEND_API_KEY && from ? from : null;
}

export async function sendEmail(email: OutgoingEmail): Promise<SendEmailResult> {
  const from = getSender();
  // Sin credenciales (desarrollo) no se envía nada: se muestra en consola
  if (!from) {
    console.info(`[email:dev] Para: ${email.to}\nAsunto: ${email.subject}\n\n${email.text}\n`);
    return { id: "dev", error: null };
  }

  try {
    const data = await callResend("/emails", toResendPayload(email, from));
    return { id: data?.id ?? null, error: null };
  } catch (error) {
    return { id: null, error: error instanceof Error ? error.message : "Error desconocido al enviar el email" };
  }
}

// Envía hasta BATCH_SIZE emails en una sola llamada. Devuelve un resultado por email, en el mismo orden.
export async function sendEmailBatch(emails: OutgoingEmail[]): Promise<SendEmailResult[]> {
  const from = getSender();
  if (!from) {
    for (const email of emails) {
      console.info(`[email:dev] Para: ${email.to} · Asunto: ${email.subject}`);
    }
    return emails.map(() => ({ id: "dev", error: null }));
  }

  try {
    const data = await callResend("/emails/batch", emails.map((email) => toResendPayload(email, from)));
    const ids: { id?: string }[] = Array.isArray(data?.data) ? data.data : [];
    return emails.map((_, index) => ({ id: ids[index]?.id ?? null, error: null }));
  } catch (error) {
    const message = error instanceof Error ? error.message : "Error desconocido al enviar el lote";
    return emails.map(() => ({ id: null, error: message }));
  }
}
