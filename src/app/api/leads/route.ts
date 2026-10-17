import { after, NextResponse } from "next/server";

import { isSubscribed, isValidEmail, normalizeEmail, upsertLead, type LeadUtms } from "@/lib/leads";
import { sendConfirmationEmail } from "@/lib/mailing";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

// Quita los caracteres de control y los que inician una fórmula en Excel (la exportación CSV ya los neutraliza)
function cleanUtm(value: unknown) {
  if (typeof value !== "string") return undefined;
  const text = value
    .replace(/[\u0000-\u001f\u007f]/g, "")
    .replace(/^[=+\-@\s]+/, "")
    .trim()
    .slice(0, 120);
  return text || undefined;
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
    const { lead } = await upsertLead(email, utms);
    // Nuevo, pendiente o dado de baja: email con el enlace de confirmación. El email sale después de responder,
    // para que la respuesta tarde lo mismo y no delate quién está ya en la lista
    if (!isSubscribed(lead)) {
      after(async () => {
        try {
          await sendConfirmationEmail(lead);
        } catch (error) {
          console.error("[leads] Error enviando la confirmación:", error);
        }
      });
    }
    // No se devuelve el token ni si ya estaba: con el token se podría dar de baja a cualquiera conociendo su email
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[leads] Error registrando lead:", error);
    return NextResponse.json({ error: "No hemos podido apuntarte. Inténtalo de nuevo en un momento." }, { status: 500 });
  }
}
