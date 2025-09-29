"use client";

import { useState, useRef } from "react";
import { Mail, ArrowRight, Sparkles, TrendingUp, Users, Zap } from "lucide-react";
import { beehiivService } from '@/services/beehiiv';
import { AnimatedBackground } from "@/components/Newsletter/backgrounds";

export default function NewsletterPage() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isAlreadySubscribed, setIsAlreadySubscribed] = useState(false);
  const [error, setError] = useState("");
  const heroSectionRef = useRef<HTMLElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const result = await beehiivService.createSubscription({
        email,
        utm_source: "homepage",
        utm_medium: "newsletter_hero",
        utm_campaign: "newsletter_main",
        custom_fields: [
          { name: "signup_source", value: "homepage_newsletter" },
          { name: "page_type", value: "newsletter_landing" }
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
      console.error('Error en newsletter subscription:', error);
      setError(error instanceof Error ? error.message : "Error de conexión. Por favor, inténtalo de nuevo.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#080604] text-white">
      {/* Hero Section - Newsletter Focus */}
      <section ref={heroSectionRef} className="relative min-h-screen flex items-center justify-center py-20 px-6">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] to-[#050302] z-10"></div>

        {/* Glow Effect */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A880]/8 blur-[120px] z-5"></div>

        {/* Content */}
        <div className="relative z-20 max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-[#C9A880]/10 border border-[#C9A880]/20 rounded-full px-4 py-2 mb-8">
            <Sparkles className="w-4 h-4 text-[#C9A880]" />
            <span className="text-sm text-[#C9A880] font-medium">Newsletter Semanal de Desarrollo con IA</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">
              Desarrolla con IA
            </span>
            <br />
            <span className="text-white">
              Como un Arquitecto
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
            Aprende a construir aplicaciones reales usando IA sin escribir código. Herramientas, arquitectura y estrategias prácticas cada semana.
          </p>

          {/* Success/Already Subscribed State */}
          {(isSuccess || isAlreadySubscribed) ? (
            <div className="max-w-md mx-auto">
              <div className="bg-[#0a0a0a] border-2 border-[#C9A880]/30 rounded-2xl p-8">
                <div className="w-16 h-16 bg-[#C9A880]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8 text-[#C9A880]" />
                </div>
                <h3 className="text-2xl font-bold mb-3 text-white">
                  {isAlreadySubscribed ? "¡Ya estás suscrito!" : "¡Bienvenido!"}
                </h3>
                <p className="text-gray-400">
                  {isAlreadySubscribed
                    ? "Tu email ya está en nuestra lista. Recibirás la próxima edición."
                    : "¡Perfecto! Ya estás suscrito. Recibirás contenido exclusivo cada semana."
                  }
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  className="flex-1 px-6 py-4 bg-black/40 border-2 border-[#C9A880]/20 rounded-xl text-lg text-white placeholder-gray-500 focus:outline-none focus:border-[#C9A880]/50 focus:bg-black/60 transition-all"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-[#C9A880] to-[#A78355] hover:from-[#CEB089] hover:to-[#B08A5A] text-black font-medium px-8 py-4 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 transition-all hover:scale-105 whitespace-nowrap"
                >
                  <span>{isSubmitting ? "Enviando..." : "Suscribirme"}</span>
                  {!isSubmitting && <ArrowRight className="w-5 h-5" />}
                </button>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}
            </form>
          )}

          {/* Social Proof */}
          <div className="mt-8 flex items-center justify-center space-x-2 text-white/60">
            <Users className="w-4 h-4" />
            <span className="text-sm">Únete a +1300 desarrolladores construyendo con IA</span>
          </div>

          {/* Author Info */}
          <div className="mt-12 flex items-center justify-center">
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-[#C9A880]/30">
                <img
                  src="/testimonios/avatares/adrian-avatar.png"
                  alt="Adrià Estévez"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-white font-medium">
                  Adrià Estévez
                </div>
                <div className="text-white/60 text-sm">
                  Founder of Arquitectos IA
                </div>
              </div>
              <a
                href="https://youtube.com/@adriaestevez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-24 px-6 bg-[#0a0a0a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
              ¿Qué recibirás cada semana?
            </h2>
            <p className="text-xl text-white/60">
              Contenido exclusivo directo a tu bandeja de entrada
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Benefit 1 */}
            <div className="bg-black/40 border border-[#C9A880]/20 rounded-2xl p-8 hover:border-[#C9A880]/40 transition-all">
              <div className="w-12 h-12 bg-[#C9A880]/20 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-[#C9A880]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Apps Reales Sin Código
              </h3>
              <p className="text-white/60">
                Aprende a construir aplicaciones completas usando IA. Desde MVPs hasta productos escalables, sin escribir una línea.
              </p>
            </div>

            {/* Benefit 2 */}
            <div className="bg-black/40 border border-[#C9A880]/20 rounded-2xl p-8 hover:border-[#C9A880]/40 transition-all">
              <div className="w-12 h-12 bg-[#C9A880]/20 rounded-xl flex items-center justify-center mb-6">
                <TrendingUp className="w-6 h-6 text-[#C9A880]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Herramientas & Prompts
              </h3>
              <p className="text-white/60">
                Las herramientas de IA que uso para construir apps más rápido. Prompts probados y workflows optimizados.
              </p>
            </div>

            {/* Benefit 3 */}
            <div className="bg-black/40 border border-[#C9A880]/20 rounded-2xl p-8 hover:border-[#C9A880]/40 transition-all">
              <div className="w-12 h-12 bg-[#C9A880]/20 rounded-xl flex items-center justify-center mb-6">
                <Sparkles className="w-6 h-6 text-[#C9A880]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-white">
                Arquitectura & Estrategias
              </h3>
              <p className="text-white/60">
                Cómo diseñar y estructurar tus proyectos con IA. Decisiones clave, patrones y metodologías que funcionan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 px-6 bg-[#080604]">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            ¿Listo para desarrollar con IA?
          </h2>
          <p className="text-xl text-white/60 mb-8">
            Únete a nuestra comunidad de arquitectos y recibe tutoriales, herramientas y estrategias cada semana
          </p>
          <button
            onClick={() => {
              setIsSuccess(false);
              setIsAlreadySubscribed(false);
              heroSectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }}
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-[#C9A880] to-[#A78355] hover:from-[#CEB089] hover:to-[#B08A5A] text-black font-medium px-8 py-4 rounded-xl transition-all hover:scale-105"
          >
            <span>Suscribirme Gratis</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-12 px-6 bg-[#0a0a0a] border-t border-white/10">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-white/40 text-sm mb-4">
            © 2025 Adrià Estévez. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center space-x-6 text-sm text-white/40">
            <a href="/bootcamp" className="hover:text-white/60 transition-colors">
              Bootcamp IA
            </a>
            <a href="/privacy" className="hover:text-white/60 transition-colors">
              Privacidad
            </a>
            <a href="/terms" className="hover:text-white/60 transition-colors">
              Términos
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}