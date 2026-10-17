"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";

const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content"] as const;

interface WaitlistFormProps {
  align?: "left" | "center";
  buttonLabel?: string;
  // Campo y botón uno debajo del otro siempre (p. ej. dentro del pop-up del vídeo)
  stacked?: boolean;
  // Si se pasa, el componente que lo usa decide qué mostrar al apuntarse
  onSuccess?: () => void;
}

export function WaitlistForm({ align = "left", buttonLabel = "Apuntarme a la lista", stacked = false, onSuccess }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [consent, setConsent] = useState(false);
  const [website, setWebsite] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!consent) {
      setError("Marca la casilla para que pueda avisarte por email.");
      return;
    }

    setIsSubmitting(true);
    const params = new URLSearchParams(window.location.search);
    const utms = Object.fromEntries(UTM_KEYS.map((key) => [key, params.get(key) ?? undefined]));

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, consent, website, ...utms }),
      });
      const data = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(data.error || "No hemos podido apuntarte. Inténtalo de nuevo.");
      }
      if (onSuccess) onSuccess();
      else setIsDone(true);
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : "Error de conexión. Inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const alignment = align === "center" ? "mx-auto text-center" : "text-left";

  if (isDone) {
    return (
      <div className={`w-full max-w-xl rounded-xl border border-[#C9A880]/40 bg-[#C9A880]/10 px-5 py-4 ${alignment}`} role="status">
        <p className="font-semibold text-white">¡Ya casi está! Revisa tu email</p>
        <p className="mt-1 text-sm text-white/70">
          Te he enviado un enlace para confirmar tu dirección. Al confirmarla entras en la lista y, cuando abra la próxima
          convocatoria, serás de los primeros en saberlo. Si ya estabas en la lista, no tienes que hacer nada.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`w-full max-w-xl ${alignment}`} noValidate>
      <div className={`flex flex-col gap-3 ${stacked ? "" : "sm:flex-row"}`}>
        <input
          type="email"
          required
          autoComplete="email"
          placeholder="tu@email.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className={`w-full h-12 rounded-lg ${stacked ? "" : "sm:flex-1"} bg-black/40 border border-white/20 px-4 text-white placeholder:text-white/35 focus:outline-none focus:border-[#C9A880]`}
          aria-label="Email"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="h-12 rounded-lg bg-[#E8C98F] px-6 font-semibold text-black transition-colors hover:bg-[#F2D9A8] disabled:opacity-60 whitespace-nowrap"
        >
          {isSubmitting ? "Un segundo…" : buttonLabel}
        </button>
      </div>

      {/* Campo trampa para bots: oculto para personas */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        value={website}
        onChange={(event) => setWebsite(event.target.value)}
        className="hidden"
        aria-hidden="true"
      />

      <label className={`flex items-start gap-2.5 mt-3 text-xs text-white/50 cursor-pointer ${align === "center" ? "justify-center text-left" : ""}`}>
        <input
          type="checkbox"
          checked={consent}
          onChange={(event) => setConsent(event.target.checked)}
          className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-[#C9A880]"
        />
        <span>
          Acepto la{" "}
          <Link href="/privacy" className="underline hover:text-white/80" target="_blank">
            política de privacidad
          </Link>{" "}
          y recibir emails de Adrià sobre Arquitectos IA. Baja con un clic.
        </span>
      </label>

      {error && <p className="mt-2 text-sm text-red-400">{error}</p>}
    </form>
  );
}
