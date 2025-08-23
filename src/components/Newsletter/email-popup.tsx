"use client";

import { useState } from "react";
import { X, Mail, ArrowRight } from "lucide-react";

interface EmailPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EmailPopup({ isOpen, onClose }: EmailPopupProps) {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch('/api/newsletter/beehiiv-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
        setIsSuccess(true);
        setEmail("");
        setTimeout(() => {
          onClose();
          setIsSuccess(false);
        }, 2000);
      } else {
        setError("Hubo un error. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      setError("Error de conexión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-[#0a0a0a] border border-[#C9A880]/30 rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        {isSuccess ? (
          <div className="text-center">
            <div className="w-16 h-16 bg-[#C9A880]/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-[#C9A880]" />
            </div>
            <h3 className="text-2xl font-bold mb-2 text-white">¡Estás en la lista!</h3>
            <p className="text-gray-400">
              Te notificaré el 15 de Septiembre cuando abramos nuevas plazas.
            </p>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-[#C9A880]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-[#C9A880]" />
              </div>
              <h3 className="text-2xl font-bold mb-2 text-white">
                Bootcamp IA - 15 Septiembre
              </h3>
              <p className="text-gray-400 text-sm">
                Únete al bootcamp para desarrollar con Inteligencia Artificial. Comienza el 15 de Septiembre.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="w-full px-4 py-3 bg-black/40 border border-[#C9A880]/20 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A880]/50 focus:bg-black/60 transition-all"
                  required
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#C9A880] to-[#A78355] hover:from-[#CEB089] hover:to-[#B08A5A] hover:scale-[1.02] hover:shadow-md text-black font-medium py-3 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-all duration-500 ease-out"
              >
                <span>{isSubmitting ? "Enviando..." : "Unirme a la lista de espera"}</span>
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
}