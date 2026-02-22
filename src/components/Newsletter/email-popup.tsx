"use client";

import { useState } from "react";
import { X, Mail, ArrowRight } from "lucide-react";
import { beehiivService } from '@/services/beehiiv';

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
  utmSource?: string;
  utmMedium?: string;
  customFields?: { name: string; value: string }[];
}

export function EmailPopup({ isOpen, onClose, utmSource = "popup", utmMedium = "bootcamp", customFields = [] }: EmailPopupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const result = await beehiivService.createSubscription({ 
        email,
        utm_source: utmSource,
        utm_medium: utmMedium,
        utm_campaign: "september_2025",
        custom_fields: [
          { name: "signup_source", value: `${utmSource}_${utmMedium}` },
          ...customFields
        ]
      });

      if (result.success) {
        if (result.alreadySubscribed) {
          setIsAlreadySubscribed(true);
        } else {
          setIsSuccess(true);
        }
        setEmail("");
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
          setIsAlreadySubscribed(false);
        }, 2500);
      } else {
        setError(result.message || "Hubo un error. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error en popup subscription:', error);
      setError(error instanceof Error ? error.message : "Error de conexión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-[#0a0a0a] border-2 border-[#C9A880]/30 rounded-3xl p-10 md:p-12 max-w-lg md:max-w-xl w-full mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-8 h-8" />
        </button>

        {(isSuccess || isAlreadySubscribed) ? (
          <div className="text-center">
            <div className="w-20 h-20 md:w-24 md:h-24 bg-[#C9A880]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-10 h-10 md:w-12 md:h-12 text-[#C9A880]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              {isAlreadySubscribed ? "¡Ya estás en la lista!" : "✅ Correo enviado"}
            </h3>
            <p className="text-gray-400 text-lg md:text-xl">
              {isAlreadySubscribed
                ? "Tu email ya estaba registrado. Te avisaremos cuando abramos nuevas plazas."
                : <>
                    Revisa tu bandeja de entrada y, por si acaso, <strong>comprueba spam</strong> y márcalo como <strong>&quot;no es spam&quot;</strong>.
                    Si está en <strong>promociones</strong>, muévelo a tu <strong>bandeja principal</strong>.
                  </>
              }
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-20 h-20 md:w-24 md:h-24 bg-[#C9A880]/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Mail className="w-10 h-10 md:w-12 md:h-12 text-[#C9A880]" />
              </div>
              <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                AI Developer Mastery
              </h3>
              <p className="text-gray-400 text-base md:text-lg">
                Únete a AI Developer Mastery y empieza a desarrollar con Inteligencia Artificial.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-5 py-4 md:py-5 bg-black/40 border-2 border-[#C9A880]/20 rounded-xl text-lg md:text-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A880]/50 focus:bg-black/60 transition-all"
                  required
                />
              </div>

              {error && (
                <p className="text-red-400 text-base md:text-lg text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#C9A880] to-[#A78355] hover:from-[#CEB089] hover:to-[#B08A5A] hover:scale-[1.02] hover:shadow-md text-black font-medium py-4 md:py-5 text-lg md:text-xl rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-3 transition-all duration-500 ease-out"
              >
                <span>{isSubmitting ? "Enviando..." : "Unirme a la lista de espera"}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}