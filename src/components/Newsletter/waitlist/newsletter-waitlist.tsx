"use client";

import Link from "next/link";

import { Logo } from "@/components/Logo";
import { AnimatedBackground } from "@/components/Newsletter/backgrounds";
import { NewsletterAvatarCircles } from "@/components/Newsletter/newsletter-avatar-circles";
import { RainbowButtonDemo } from "@/components/rainbowButton";

export function NewsletterWaitlist() {
  const handleJoinCommunity = () => {
    window.open('https://www.skool.com/arquitectos-ia-5565', '_blank');
  };

  return (
    <>


      <section id="newsletter-form" className="relative pt-8 pb-16 mt-0 bg-[#080604] min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Fondo con degradado sutil basado en el color principal pero muy oscurecido */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] to-[#050302] z-10"></div>

        {/* Efecto de iluminación del color principal */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A880]/8 blur-[120px] z-5"></div>

        {/* Contenido */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-8">
            <Logo width={70} height={70} className="h-16 w-auto" />
          </div>

          {/* Banner de "Comunidad abierta" destacado - Con estilo de la plataforma */}
          <div className="inline-flex items-center justify-center px-6 py-2.5 bg-gradient-to-r from-[#C9A880] to-[#A78355] text-black rounded-full font-medium text-sm mb-8 mx-auto shadow-lg border border-[#C9A880]/30">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            ¡LA COMUNIDAD YA ESTÁ ABIERTA! ENTRA YA
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-7 text-white leading-tight">
            <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">Domina la IA:</span><br />
            Tu Ventaja Definitiva<br />
            <span className="text-[#C9A880]">Sobre los Demás</span>
          </h1>

          <p className="text-white/80 max-w-2xl mx-auto mb-10">
            <span className="text-[#C9A880] font-medium">¡Las puertas están abiertas!</span> Únete ahora a nuestra Comunidad de Arquitectos IA y aprovecha el precio especial de early adopter ¡para siempre! 🔥

            <br /><br />

            Accede <span className="text-[#C9A880] font-medium">directamente a la comunidad</span>, empieza a aprender de inmediato y forma parte de los primeros miembros fundadores con ventajas exclusivas.
          </p>

          {/* Join Community Section - Elegante con color principal muy oscuro */}
          <div className="bg-gradient-to-b from-[#161310]/90 to-[#0c0a06]/95 backdrop-blur-md p-8 rounded-3xl border border-[#C9A880]/25 hover:border-[#C9A880]/40 shadow-lg max-w-2xl mx-auto space-y-6 transition-all duration-300">
            <NewsletterAvatarCircles className="mb-2" />

            <div className="text-center space-y-4">
              <h3 className="text-2xl font-bold text-white">
                ¡Bienvenido a la Comunidad de <span className="text-[#C9A880]">Arquitectos IA</span>!
              </h3>

              <p className="text-white/80">
                Ya puedes acceder directamente a todos los cursos, sesiones en vivo, recursos exclusivos y a nuestra comunidad privada.
              </p>

              <div className="flex items-center justify-center space-x-2 text-sm text-[#C9A880]">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
                </svg>
                <span className="font-medium">Acceso inmediato tras tu inscripción</span>
              </div>
            </div>

            <div className="pt-2">
              <div className="space-y-3">
                <RainbowButtonDemo
                  onClick={handleJoinCommunity}
                  className="w-full py-3.5 transform transition-transform hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span className="text-lg font-medium flex items-center justify-center">
                    <span className="text-xs sm:text-sm md:text-base">ÚNETE A LA COMUNIDAD AHORA</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </RainbowButtonDemo>
                <div className="px-4 py-3 bg-[#C9A880]/10 rounded-lg border border-[#C9A880]/20">
                  <p className="text-xs text-[#C9A880] text-center font-medium">
                    Acceso inmediato · Precio especial de early adopter · Comunidad exclusiva
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
