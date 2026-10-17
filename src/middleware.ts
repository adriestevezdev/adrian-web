import { NextResponse, type NextRequest } from "next/server";

const MIN_PASSWORD_LENGTH = 24;
// Valor de ejemplo de .env.example: si llega a producción, el panel no se abre
const EXAMPLE_PASSWORD = "cambia-esto";

// SHA-256 de los dos lados para comparar siempre la misma longitud
async function sha256(value: string) {
  return new Uint8Array(await crypto.subtle.digest("SHA-256", new TextEncoder().encode(value)));
}

// Comparación en tiempo constante: el runtime Edge no tiene crypto.timingSafeEqual
async function safeEqual(provided: string, expected: string) {
  const [a, b] = await Promise.all([sha256(provided), sha256(expected)]);
  let diff = 0;
  for (let i = 0; i < a.length; i++) {
    diff |= a[i] ^ b[i];
  }
  return diff === 0;
}

function decodeBasicAuth(header: string | null) {
  if (!header?.startsWith("Basic ")) return null;
  try {
    const bytes = Uint8Array.from(atob(header.slice("Basic ".length)), (char) => char.charCodeAt(0));
    const decoded = new TextDecoder().decode(bytes);
    const separator = decoded.indexOf(":");
    if (separator === -1) return null;
    return { user: decoded.slice(0, separator), password: decoded.slice(separator + 1) };
  } catch {
    return null;
  }
}

// Protege /embudo (/admin lo sirve la plataforma en producción) con autenticación básica (usuario ADMIN_USER, contraseña ADMIN_PASSWORD)
export async function middleware(request: NextRequest) {
  const user = process.env.ADMIN_USER;
  const password = process.env.ADMIN_PASSWORD;

  if (!user || !password || password.length < MIN_PASSWORD_LENGTH || password === EXAMPLE_PASSWORD) {
    console.error(
      `[embudo] Panel cerrado: falta ADMIN_USER o ADMIN_PASSWORD, o la contraseña tiene menos de ${MIN_PASSWORD_LENGTH} caracteres o es la de ejemplo`,
    );
    return new NextResponse("Panel no disponible", { status: 503 });
  }

  const credentials = decodeBasicAuth(request.headers.get("authorization"));
  if (credentials) {
    // Se comparan los dos siempre, para no revelar cuál de los dos falla por el tiempo de respuesta
    const [userOk, passwordOk] = await Promise.all([
      safeEqual(credentials.user, user),
      safeEqual(credentials.password, password),
    ]);
    if (userOk && passwordOk) {
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
