"use client";

import Link from "next/link";
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
          {/* Avatar circles at the top */}
          <div className="flex items-center justify-center mb-8">
            <NewsletterAvatarCircles className="" />
          </div>

          {/* Main minimalist headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            De la Idea a la App con <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">IA</span>
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-light">
            Aprende, construye y crece en una comunidad de Builders
          </p>

          {/* Single prominent CTA button */}
          <div className="max-w-xs mx-auto">
            <RainbowButtonDemo
              onClick={handleJoinCommunity}
              className="w-full py-4 transform transition-transform hover:scale-[1.02] active:scale-[0.98] text-lg"
            >
              <span className="font-medium flex items-center justify-center">
                Únete Ahora
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </RainbowButtonDemo>
          </div>
        </div>
      </section>
    </>
  );
}
