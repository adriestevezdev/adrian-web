"use client";

import React from "react";

import { RainbowButtonDemo } from "@/components/rainbowButton";

export function NewsletterPricing() {
  return (
    <section className="relative py-20 bg-[#080604] border-t border-[#C9A880]/15">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] to-[#050302] z-10"></div>

      {/* Glow effect for the primary color */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A880]/8 blur-[120px] z-5"></div>

      <div className="relative z-20 container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">
              ⏰ Evolución de Precios
            </span>{" "}
            - Asegura tu plaza AHORA
          </h2>
          <p className="text-lg text-white/80 max-w-3xl mx-auto">
            Mira esta línea de tiempo REAL. El precio NUNCA volverá a bajar. Cada nuevo miembro aumenta el valor de la comunidad.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 mb-8">
            {/* Past Price */}
            <div className="flex flex-col items-center relative">
              <div className="w-16 h-16 rounded-full bg-red-500/20 border-2 border-red-500 flex items-center justify-center mb-3">
                <span className="text-red-400 font-bold">✗</span>
              </div>
              <div className="text-center">
                <div className="text-red-400 font-semibold text-sm mb-1">FASE PASADA</div>
                <div className="text-white text-xl font-bold">$39/mes</div>
                <div className="text-red-400/80 text-xs">Ya no disponible</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-[#C9A880] text-2xl">→</div>

            {/* Current Price */}
            <div className="flex flex-col items-center relative">
              <div className="w-20 h-20 rounded-full bg-[#C9A880]/20 border-4 border-[#C9A880] flex items-center justify-center mb-3 animate-pulse">
                <span className="text-[#C9A880] font-bold text-xl">🔥</span>
              </div>
              <div className="text-center">
                <div className="bg-[#C9A880] text-black px-3 py-1 rounded-full text-xs font-bold mb-2">AHORA MISMO</div>
                <div className="text-[#C9A880] text-2xl font-bold">$49/mes</div>
                <div className="text-[#C9A880]/80 text-sm">¡Solo por tiempo limitado!</div>
              </div>
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-2 py-1 rounded text-xs font-bold animate-bounce">TÚ ESTÁS AQUÍ</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-white/60 text-2xl">→</div>

            {/* Future Price */}
            <div className="flex flex-col items-center relative">
              <div className="w-16 h-16 rounded-full bg-orange-500/20 border-2 border-orange-500 flex items-center justify-center mb-3">
                <span className="text-orange-400 font-bold">⏳</span>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-semibold text-sm mb-1">PRÓXIMA FASE</div>
                <div className="text-white text-xl font-bold">$57/mes</div>
                <div className="text-orange-400/80 text-xs">A los 50 miembros</div>
              </div>
            </div>
          </div>

          {/* Urgency Counter */}
          <div className="text-center bg-red-500/10 border border-red-500/30 rounded-xl p-6 mb-8">
            <div className="text-red-400 font-bold text-lg mb-2">⚠️ ADVERTENCIA DE PRECIO</div>
            <div className="text-white text-2xl font-bold mb-2">Quedan <span className="text-red-400">37</span> plazas antes del aumento</div>
            <div className="text-white/80 text-sm">El precio subirá automáticamente a $57/mes cuando lleguemos a 50 miembros</div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Current Pricing */}
          <div className="w-full lg:w-7/12 bg-[#0c0a08]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#C9A880]/20 shadow-xl overflow-hidden relative">
            {/* Urgency badge */}
            <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-red-500/20 border border-red-500/40 text-red-400">
              <span className="text-sm font-medium">🚨 PRECIO ACTUAL - SUBE EN CUALQUIER MOMENTO</span>
            </div>

            {/* Monthly option */}
            <div className="p-6 mb-5 bg-[#13110d] rounded-xl border border-[#C9A880]/30 transition-all duration-300 hover:border-[#C9A880]/50 relative">
              <div className="absolute top-3 right-3 bg-[#C9A880] text-black px-2 py-1 rounded text-xs font-bold">
                PRECIO ACTUAL
              </div>
              <h3 className="text-xl font-bold text-white mb-5">Membresía Mensual</h3>
              <div className="flex items-baseline mb-1">
                <span className="text-4xl font-bold text-[#C9A880]">$49</span>
                <span className="text-lg text-white/70 ml-2">/mes</span>
              </div>
              <div className="flex items-center mb-5 space-x-2">
                <span className="text-white/60 line-through">Antes $39</span>
                <span className="text-red-400 line-through">Después $57</span>
              </div>
              <div className="text-xs text-white/60">
                ⚡ Precio fijo DE POR VIDA si te unes HOY
              </div>
            </div>

            {/* Annual option */}
            <div className="p-6 bg-gradient-to-br from-[#13110d] to-[#1a1713] rounded-xl border border-[#C9A880]/40 transition-all duration-300 hover:border-[#C9A880]/70 relative overflow-hidden">
              {/* Best value badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-[#C9A880] text-black text-xs font-bold px-4 py-1 uppercase transform rotate-0">
                  MEJOR OFERTA
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-5">Membresía Anual</h3>
              <div className="flex items-baseline mb-1">
                <span className="text-4xl font-bold text-[#C9A880]">$294</span>
                <span className="text-lg text-white/70 ml-2">/año</span>
              </div>
              <div className="flex items-center mb-5 space-x-2">
                <span className="text-white/60 line-through">Antes $234</span>
                <span className="text-red-400 line-through">Después $342</span>
              </div>
              <div className="bg-green-500/20 border border-green-500/40 rounded-lg p-3 mt-4">
                <div className="text-green-400 text-sm font-medium">
                  💰 Ahorras $294 al año vs mensual
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="w-full lg:w-5/12 bg-[#0c0a08]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#C9A880]/20 shadow-xl">
            {/* Urgency Warning */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6">
              <div className="text-red-400 font-bold text-sm mb-2">⚡ ÚLTIMA OPORTUNIDAD</div>
              <div className="text-white text-sm">
                Una vez que el precio suba a $57/mes, <strong>NUNCA</strong> volverá a bajar. Este es tu momento.
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-6">Al precio actual obtienes:</h3>

            <ul className="space-y-4 mb-8">
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#C9A880] mt-0.5 mr-3 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">Acceso a TODOS los cursos actuales y futuros</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#C9A880] mt-0.5 mr-3 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">Sesiones en vivo semanales y talleres PRÁCTICOS</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#C9A880] mt-0.5 mr-3 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">Acceso a la comunidad privada</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-5 w-5 text-[#C9A880] mt-0.5 mr-3 flex-shrink-0"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="text-white">Plantillas y recursos para Vibe Coding Estructurado y Agentes IA Profesionales</span>
              </li>
            </ul>

            {/* Bonus features */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <span className="h-5 w-5 text-[#C9A880] mt-0.5 mr-3 flex-shrink-0">🎁</span>
                <span className="text-[#C9A880] font-medium">BONUS - Sorteos exclusivos</span>
              </div>
              <div className="flex items-start">
                <span className="h-5 w-5 text-[#C9A880] mt-0.5 mr-3 flex-shrink-0">🎁</span>
                <span className="text-[#C9A880] font-medium">BONUS - Bolsa de Trabajo</span>
              </div>
              <div className="flex items-start">
                <span className="h-5 w-5 text-[#C9A880] mt-0.5 mr-3 flex-shrink-0">🎁</span>
                <span className="text-[#C9A880] font-medium">BONUS - Llamada de bienvenida 1-1 con Adrià Estévez</span>
              </div>
            </div>

            {/* Price Lock Guarantee */}
            <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4 mb-6">
              <div className="text-green-400 font-bold text-sm mb-2">🔒 GARANTÍA DE PRECIO FIJO</div>
              <div className="text-white text-sm">
                Si te unes HOY, tu precio queda <strong>BLOQUEADO</strong> de por vida. Nunca pagarás más, sin importar cuánto suba.
              </div>
            </div>

            {/* CTA Button */}
            <a href="https://www.skool.com/arquitectos-ia-5565" target="_blank" rel="noopener noreferrer">
              <RainbowButtonDemo className="w-full py-4 text-lg font-medium animate-pulse">
                <span className="flex items-center justify-center">
                  <span className="text-xs sm:text-sm md:text-base">🔥 ASEGURAR MI PRECIO AHORA</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </RainbowButtonDemo>
            </a>
            
            {/* Final urgency message */}
            <div className="text-center mt-4">
              <div className="text-red-400 text-sm font-medium">
                ⏰ El contador no se detiene. Cada nuevo miembro nos acerca al aumento.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
