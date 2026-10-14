import { NextResponse, type NextRequest } from "next/server";

import { getSiteUrl } from "@/config/funnel";
import { unsubscribeLead } from "@/lib/leads";

// Dos usos:
// - Formulario de /baja → redirige a la página de confirmación.
// - Baja en un clic de Gmail/Outlook (cabecera List-Unsubscribe-Post) → responde 200.
export async function POST(request: NextRequest) {
  const formData = await request.formData().catch(() => null);
  const token = request.nextUrl.searchParams.get("t") ?? formData?.get("t")?.toString() ?? "";
  const isOneClick = formData?.get("List-Unsubscribe") === "One-Click";

  if (token) {
    try {
      await unsubscribeLead(token);
    } catch (error) {
      console.error("[baja] Error dando de baja:", error);
      return new NextResponse("Error", { status: 500 });
    }
  }

  if (isOneClick) {
    return new NextResponse("OK", { status: 200 });
  }
  return NextResponse.redirect(`${getSiteUrl()}/baja?t=${encodeURIComponent(token)}&ok=1`, 303);
}
