import { NextResponse } from "next/server";

import { isValidEmail, normalizeEmail, upsertLead, type LeadUtms } from "@/lib/leads";
import { sendWelcomeEmail } from "@/lib/mailing";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

function cleanUtm(value: unknown) {
  return typeof value === "string" && value.trim() ? value.trim().slice(0, 120) : undefined;
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Petición no válida" }, { status: 400 });
  }

  // Campo trampa: los humanos no lo ven, los bots lo rellenan
  if (body.website) {
    return NextResponse.json({ error: "Petición no válida" }, { status: 400 });
  }

  const email = normalizeEmail(String(body.email ?? ""));
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Introduce un email válido" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "Necesitamos tu consentimiento para avisarte por email" }, { status: 400 });
  }

  const utms: LeadUtms = {};
  for (const key of UTM_KEYS) {
    utms[key] = cleanUtm(body[key]);
  }

  try {
    const { lead, created } = await upsertLead(email, utms);
    if (created) {
      await sendWelcomeEmail(lead);
    }
    // No se devuelve el token: con él se podría dar de baja a cualquiera conociendo su email
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[leads] Error registrando lead:", error);
    return NextResponse.json({ error: "No hemos podido apuntarte. Inténtalo de nuevo en un momento." }, { status: 500 });
  }
}
