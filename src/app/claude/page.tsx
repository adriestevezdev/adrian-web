"use client";

import { useState, useEffect } from "react";
import { ArrowRight } from "lucide-react";
import { beehiivService } from '@/services/beehiiv';

export default function ClaudeCodeTipsPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "Obtén Mis Mejores Tips de Claude Code para 2025";
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const result = await beehiivService.createSubscription({
        email,
        utm_source: "claude_subdomain",
        utm_medium: "newsletter_form",
        utm_campaign: "claude_code_tips_2025",
        custom_fields: [
          { name: "signup_source", value: "claude_code_tips" },
          { name: "page_type", value: "claude_landing" }
        ]
      });

      if (result.success) {
        if (result.alreadySubscribed) {
          setIsAlreadySubscribed(true);
        } else {
          setIsSuccess(true);
        }
        setEmail("");
      } else {
        setError(result.message || "Hubo un error. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error('Error in newsletter subscription:', error);
      setError(error instanceof Error ? error.message : "Error de conexión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#1a1a1a] text-white flex flex-col">
      {/* Logo */}
      <div className="absolute top-8 left-8 z-10">
        <img src="/claude.png" alt="Logo" className="w-10 h-10" />
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center px-6">
        <div className="max-w-5xl w-full text-center">
          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8" style={{ lineHeight: '1.3' }}>
            <div>
              <span className="text-white">Obtén Mis Mejores </span>
              <span className="text-[#FF6B35] whitespace-nowrap">Tips de Claude Code</span>
            </div>
            <div className="text-[#FF6B35]">para 2025</div>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-gray-400 mb-12">
            Te enviaré la guía de inmediato + mis mejores flujos de desarrollo con IA semanalmente.
          </p>

          {/* Success/Already Subscribed State */}
          {(isSuccess || isAlreadySubscribed) ? (
            <div className="max-w-md mx-auto">
              <div className="bg-[#2a2a2a] border-2 border-[#FF6B35]/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {isAlreadySubscribed ? "¡Ya estás suscrito!" : "¡Bienvenido!"}
                </h3>
                <p className="text-gray-400">
                  {isAlreadySubscribed
                    ? "Tu email ya está en nuestra lista. Recibirás la próxima edición."
                    : "¡Perfecto! Estás suscrito. Recibirás contenido exclusivo cada semana."
                  }
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              {/* Email Input */}
              <div className="mb-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Ingresa tu email"
                  className="w-full px-6 py-4 bg-transparent border border-gray-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-gray-400 transition-colors"
                  required
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#FF6B35] hover:bg-[#ff7a47] text-white font-medium px-6 py-4 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-all"
              >
                <span>{isSubmitting ? "Enviando..." : "Envíame la Guía"}</span>
                {!isSubmitting && <ArrowRight className="w-5 h-5" />}
              </button>

              {/* Social Proof */}
              <div className="flex items-center justify-center mt-6">
                <div className="inline-flex items-center px-4 py-2 bg-[#2a2a2a] border border-[#FF6B35]/20 rounded-full">
                  <span className="text-[#FF6B35] font-bold text-lg">+1600</span>
                  <span className="text-gray-400 ml-2">descargas</span>
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center mt-4">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
