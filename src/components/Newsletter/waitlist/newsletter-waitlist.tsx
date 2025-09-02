"use client";

import { useState } from "react";
import { AnimatedBackground } from "@/components/Newsletter/backgrounds";
import { RainbowButtonDemo } from "@/components/rainbowButton";
import { EmailPopup } from "@/components/Newsletter/email-popup";

export function NewsletterWaitlist() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const handleJoinCommunity = () => {
    setShowEmailPopup(true);
  };

  return (
    <>


      <section id="newsletter-form" className="relative py-16 mt-0 bg-[#080604] min-h-screen flex items-center justify-center">
        {/* Animated Background */}
        <AnimatedBackground />

        {/* Fondo con degradado sutil basado en el color principal pero muy oscurecido */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] to-[#050302] z-10"></div>

        {/* Efecto de iluminación del color principal */}
        <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A880]/8 blur-[120px] z-5"></div>

        {/* Contenido */}
        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">

          {/* Main minimalist headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">Construye Tu App Con IA</span><br />
            en 30 Días (Sin Código)
          </h1>

          {/* Subtitle */}
          <p className="text-white/70 text-lg md:text-xl max-w-4xl mx-auto mb-12 font-light">
            El plan paso a paso que convierte principiantes en arquitectos de la inteligencia artificial.<br />
            Comienza a construir conmigo y otros +40 estudiantes.
          </p>

          {/* Single prominent CTA button */}
          <div className="max-w-xs mx-auto mb-12">
            <RainbowButtonDemo
              onClick={handleJoinCommunity}
              className="w-full py-4 text-lg"
            >
              <span className="font-medium flex items-center justify-center">
                Quiero Mi App en 30 Días
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </span>
            </RainbowButtonDemo>
          </div>

          {/* Hero Video */}
          <div className="relative mb-8 mx-auto max-w-4xl">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-cover"
                style={{ aspectRatio: '16/9' }}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
              
              {/* Optional gradient overlay for better text readability if needed */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Author Signature */}
          <div className="flex items-center justify-center mb-12">
            <div className="flex items-center space-x-4 bg-white/5 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/10">
              <div className="text-white/60 text-sm italic">
                Creado por
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#C9A880]/30">
                  <img 
                    src="/testimonios/avatares/adrian-avatar.png" 
                    alt="Adrià Estévez" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <div className="text-white font-medium text-sm">
                    Adrià Estévez
                  </div>
                  <div className="text-white/60 text-xs">
                    Founder of Arquitectos IA
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-2">
                <a 
                  href="https://youtube.com/@adriaestevez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white/60 hover:text-white transition-colors"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Email Popup */}
      <EmailPopup 
        isOpen={showEmailPopup} 
        onClose={() => setShowEmailPopup(false)} 
        utmSource="waitlist"
        utmMedium="hero_button"
        customFields={[
          { name: "button_location", value: "hero_section" },
          { name: "button_text", value: "Quiero Mi App en 30 Días" }
        ]}
      />
    </>
  );
}
