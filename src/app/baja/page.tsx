import type { Metadata } from "next";
import Link from "next/link";

import { getLeadByToken } from "@/lib/leads";

export const metadata: Metadata = {
  title: "Darse de baja",
  robots: { index: false },
};

interface BajaPageProps {
  searchParams: Promise<{ t?: string; ok?: string }>;
}

export default async function BajaPage({ searchParams }: BajaPageProps) {
  const { t, ok } = await searchParams;
  const lead = await getLeadByToken(t);
  const isUnsubscribed = Boolean(ok || lead?.unsubscribed_at);

  return (
    <main className="min-h-screen bg-[#080604] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-white/5 border border-[#C9A880]/20 rounded-2xl p-8">
        {!lead ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Enlace no válido</h1>
            <p className="text-white/70 mb-6">No hemos encontrado tu suscripción. Usa el enlace de baja de cualquiera de los emails.</p>
          </>
        ) : isUnsubscribed ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Te has dado de baja</h1>
            <p className="text-white/70 mb-6">No recibirás más emails. Si fue un error, puedes volver a registrarte cuando quieras desde la web.</p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">¿Quieres darte de baja?</h1>
            <p className="text-white/70 mb-6">
              Dejarás de recibir emails en <span className="text-white">{lead.email}</span>.
            </p>
            <form action="/api/unsubscribe" method="POST">
              <input type="hidden" name="t" value={t} />
              <button
                type="submit"
                className="w-full rounded-xl bg-white text-black font-medium py-3 hover:bg-white/90 transition-colors"
              >
                Darme de baja
              </button>
            </form>
          </>
        )}
        <Link href="/" className="inline-block mt-6 text-sm text-[#C9A880] hover:underline">
          Volver a la web
        </Link>
      </div>
    </main>
  );
}
