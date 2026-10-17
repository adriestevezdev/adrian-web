import { after, NextResponse, type NextRequest } from "next/server";

import { getSiteUrl } from "@/config/funnel";
import { confirmLead } from "@/lib/leads";
import { sendWelcomeEmail } from "@/lib/mailing";

// Botón de /confirmar. Es un POST y no el enlace del email directamente, para que los antivirus que abren
// los enlaces de los emails no confirmen altas que nadie ha pedido.
export async function POST(request: NextRequest) {
  const formData = await request.formData().catch(() => null);
  const token = formData?.get("t")?.toString() ?? "";

  if (token) {
    try {
      const lead = await confirmLead(token);
      // La bienvenida sale una sola vez por persona (email_log): quien vuelve tras una baja no la recibe de nuevo
      if (lead) {
        after(async () => {
          try {
            await sendWelcomeEmail(lead);
          } catch (error) {
            console.error("[confirmar] Error enviando la bienvenida:", error);
          }
        });
      }
    } catch (error) {
      console.error("[confirmar] Error confirmando el alta:", error);
      return new NextResponse("Error", { status: 500 });
    }
  }

  return NextResponse.redirect(`${getSiteUrl()}/confirmar?t=${encodeURIComponent(token)}`, 303);
}
