import type { Metadata } from "next";
import Link from "next/link";

import { getLeadByToken, isSubscribed } from "@/lib/leads";

export const metadata: Metadata = {
  title: "Confirmar email",
  robots: { index: false },
};

interface ConfirmarPageProps {
  searchParams: Promise<{ t?: string }>;
}

export default async function ConfirmarPage({ searchParams }: ConfirmarPageProps) {
  const { t } = await searchParams;
  const lead = await getLeadByToken(t);

  return (
    <main className="min-h-screen bg-[#080604] text-white flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-white/5 border border-[#C9A880]/20 rounded-2xl p-8">
        {!lead ? (
          <>
            <h1 className="text-2xl font-bold mb-4">Enlace no válido</h1>
            <p className="text-white/70 mb-6">No hemos encontrado tu alta. Usa el enlace del último email de confirmación o vuelve a apuntarte.</p>
          </>
        ) : isSubscribed(lead) ? (
          <>
            <h1 className="text-2xl font-bold mb-4">¡Ya estás en la lista!</h1>
            <p className="text-white/70 mb-6">
              Cuando abra la próxima convocatoria, serás de los primeros en saberlo. Te escribiré a{" "}
              <span className="text-white">{lead.email}</span>.
            </p>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold mb-4">{lead.unsubscribed_at ? "¿Vuelves a la lista?" : "Confirma tu email"}</h1>
            <p className="text-white/70 mb-6">
              Recibirás los emails de la lista de espera en <span className="text-white">{lead.email}</span>.
            </p>
            <form action="/api/confirm" method="POST">
              <input type="hidden" name="t" value={t} />
              <button
                type="submit"
                className="w-full rounded-xl bg-[#E8C98F] text-black font-semibold py-3 hover:bg-[#F2D9A8] transition-colors"
              >
                {lead.unsubscribed_at ? "Volver a la lista" : "Confirmar mi email"}
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
