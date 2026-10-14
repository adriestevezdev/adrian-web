import { randomBytes } from "crypto";

import { query } from "@/lib/db";

export interface Lead {
  id: number;
  email: string;
  token: string;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  unsubscribed_at: Date | null;
  converted_at: Date | null;
  created_at: Date;
}

export interface LeadUtms {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
}

export interface LeadWithStats extends Lead {
  emails_sent: number;
  whatsapp_clicks: number;
}

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function normalizeEmail(email: string) {
  return email.trim().toLowerCase();
}

export function isValidEmail(email: string) {
  return email.length <= 254 && EMAIL_REGEX.test(email);
}

// Crea el lead o devuelve el existente. Si se había dado de baja y vuelve a apuntarse, se reactiva.
export async function upsertLead(email: string, utms: LeadUtms) {
  const token = randomBytes(18).toString("base64url");
  const rows = await query<Lead & { inserted: boolean }>(
    `INSERT INTO leads (email, token, utm_source, utm_medium, utm_campaign, utm_content)
     VALUES ($1, $2, $3, $4, $5, $6)
     ON CONFLICT (email) DO UPDATE SET unsubscribed_at = NULL
     RETURNING *, (xmax = 0) AS inserted`,
    [email, token, utms.utm_source ?? null, utms.utm_medium ?? null, utms.utm_campaign ?? null, utms.utm_content ?? null],
  );
  const { inserted, ...lead } = rows[0];
  return { lead: lead as Lead, created: inserted };
}

export async function getLeadByToken(token: string | undefined | null) {
  if (!token) return null;
  const rows = await query<Lead>("SELECT * FROM leads WHERE token = $1", [token]);
  return rows[0] ?? null;
}

export async function unsubscribeLead(token: string) {
  const rows = await query<Lead>(
    "UPDATE leads SET unsubscribed_at = COALESCE(unsubscribed_at, now()) WHERE token = $1 RETURNING *",
    [token],
  );
  return rows[0] ?? null;
}

export async function setLeadConverted(id: number, converted: boolean) {
  await query("UPDATE leads SET converted_at = $2 WHERE id = $1", [id, converted ? new Date() : null]);
}

export async function recordWhatsappClick(leadId: number | null, source: string) {
  await query("INSERT INTO whatsapp_clicks (lead_id, source) VALUES ($1, $2)", [leadId, source]);
}

// Quien recibe los emails a la lista: apuntado, sin baja y que todavía no es cliente
export async function countWaitlist() {
  const rows = await query<{ total: number }>(
    "SELECT COUNT(*)::int AS total FROM leads WHERE unsubscribed_at IS NULL AND converted_at IS NULL",
  );
  return rows[0]?.total ?? 0;
}

export async function listLeads(limit = 1000) {
  return query<LeadWithStats>(
    `SELECT l.*,
            (SELECT COUNT(*)::int FROM email_log e WHERE e.lead_id = l.id AND e.error IS NULL) AS emails_sent,
            (SELECT COUNT(*)::int FROM whatsapp_clicks c WHERE c.lead_id = l.id) AS whatsapp_clicks
       FROM leads l
      ORDER BY l.created_at DESC
      LIMIT $1`,
    [limit],
  );
}

// Para exportar: solo quien sigue apuntado (las bajas no deben importarse en otra herramienta)
export async function listSubscribedLeads() {
  return query<Lead>("SELECT * FROM leads WHERE unsubscribed_at IS NULL ORDER BY created_at");
}

export async function getSignupsBySource() {
  return query<{ source: string; leads: number }>(
    `SELECT COALESCE(utm_source, 'directo') AS source, COUNT(*)::int AS leads
       FROM leads GROUP BY 1 ORDER BY leads DESC`,
  );
}

export async function getClicksBySource() {
  return query<{ source: string; clicks: number }>(
    "SELECT source, COUNT(*)::int AS clicks FROM whatsapp_clicks GROUP BY source ORDER BY clicks DESC",
  );
}
