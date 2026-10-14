import { NextResponse, type NextRequest } from "next/server";

// Protege /embudo (/admin lo sirve la plataforma en producción) con autenticación básica (usuario cualquiera, contraseña ADMIN_PASSWORD)
export function middleware(request: NextRequest) {
  const password = process.env.ADMIN_PASSWORD;
  const header = request.headers.get("authorization");

  if (password && header?.startsWith("Basic ")) {
    const decoded = atob(header.slice("Basic ".length));
    const providedPassword = decoded.slice(decoded.indexOf(":") + 1);
    if (providedPassword === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Autenticación requerida", {
    status: 401,
    headers: { "WWW-Authenticate": 'Basic realm="embudo", charset="UTF-8"' },
  });
}

export const config = {
  matcher: ["/embudo/:path*"],
};
