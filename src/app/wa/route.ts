import { NextResponse, type NextRequest } from "next/server";

import { getLeadByToken, recordWhatsappClick } from "@/lib/leads";
import { buildWhatsappLink } from "@/lib/whatsapp";

export const dynamic = "force-dynamic";

const SOURCE_REGEX = /^[a-z0-9-]{1,40}$/;

// Registra de dónde viene cada clic a WhatsApp (dudas) y redirige al chat con el mensaje ya escrito
export async function GET(request: NextRequest) {
  const params = request.nextUrl.searchParams;
  const rawSource = params.get("src") ?? "directo";
  const source = SOURCE_REGEX.test(rawSource) ? rawSource : "desconocido";

  try {
    const lead = await getLeadByToken(params.get("t"));
    await recordWhatsappClick(lead?.id ?? null, source);
  } catch (error) {
    // Si falla la base de datos, el usuario tiene que llegar a WhatsApp igualmente
    console.error("[wa] Error registrando clic:", error);
  }

  return NextResponse.redirect(buildWhatsappLink(), 302);
}
