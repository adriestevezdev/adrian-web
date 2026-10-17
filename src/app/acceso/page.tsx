import type { Metadata } from "next";
import { Merriweather } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

import { LoginForm } from "@/components/Members/login-form";
import { funnel } from "@/config/funnel";

const serif = Merriweather({ subsets: ["latin"], weight: ["700"], display: "swap" });

export const metadata: Metadata = {
  title: "Acceso miembros",
  robots: { index: false },
};

export default function AccesoPage() {
  return (
    <main className="min-h-screen bg-black text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Link href="/" className="mb-8 flex items-center justify-center gap-3">
          <Image src="/logo_arquitectosIA.png" alt="" width={40} height={40} className="rounded-md" />
          <span className={`${serif.className} text-xl text-white`}>{funnel.brand}</span>
        </Link>

        <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-8">
          <h1 className="text-2xl font-bold text-center">Acceso miembros</h1>
          <p className="mt-2 mb-6 text-center text-sm text-white/60">Entra con el email y la contraseña de tu cuenta.</p>
          <LoginForm />
        </div>

        <p className="mt-6 text-center text-sm text-white/60">
          ¿Aún no eres miembro?{" "}
          <Link href="/#registro" className="text-[#C9A880] hover:underline">
            Apúntate a la lista de espera
          </Link>
        </p>
      </div>
    </main>
  );
}
