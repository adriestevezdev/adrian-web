"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { RainbowButtonDemo } from "@/components/rainbowButton";

interface Testimonial {
  id: number;
  image: string;
  author: string;
}

export function NewsletterPricing() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: "/testimonios/Alfonso.jpg",
      author: "Alfonso Valcarcel"
    },
    {
      id: 2,
      image: "/testimonios/Cesar salinas.jpg",
      author: "Cesar Salinas"
    },
    {
      id: 3,
      image: "/testimonios/Alvaro.png",
      author: "Alvaro Arancibia"
    },
    {
      id: 4,
      image: "/testimonios/Marcos.jpg",
      author: "Marcos Valverde"
    },
    {
      id: 5,
      image: "/testimonios/manel hernandez.jpg",
      author: "Manel Hernández"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-20 bg-[#080604] border-t border-[#C9A880]/15">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] to-[#050302] z-10"></div>

      {/* Glow effect for the primary color */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A880]/8 blur-[120px] z-5"></div>

      <div className="relative z-20 container mx-auto px-6 max-w-6xl">

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

        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column - Current Pricing */}
          <div className="w-full lg:w-7/12 bg-[#0c0a08]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#C9A880]/20 shadow-xl overflow-hidden relative">

            {/* Monthly option */}
            <div className="p-6 mb-5 bg-[#13110d] rounded-xl border border-[#C9A880]/30 transition-all duration-300 hover:border-[#C9A880]/50 relative">
              <h3 className="text-xl font-bold text-white mb-5">Membresía Mensual</h3>
              <div className="flex items-baseline mb-1">
                <span className="text-4xl font-bold text-[#C9A880]">$49</span>
                <span className="text-lg text-white/70 ml-2">/mes</span>
              </div>
              <div className="flex items-center mb-5 space-x-2">
                <span className="text-red-400">Después $57</span>
              </div>
            </div>

            {/* Annual option */}
            <div className="p-6 bg-gradient-to-br from-[#13110d] to-[#1a1713] rounded-xl border border-[#C9A880]/40 transition-all duration-300 hover:border-[#C9A880]/70 relative overflow-hidden">
              {/* Best value badge */}
              <div className="absolute top-0 right-0">
                <div className="bg-[#C9A880] text-black text-xs font-bold px-4 py-1 uppercase transform rotate-0">
                  AHORRO ANUAL
                </div>
              </div>

              <h3 className="text-xl font-bold text-white mb-5">Membresía Anual</h3>
              <div className="flex items-baseline mb-1">
                <span className="text-4xl font-bold text-[#C9A880]">$264</span>
                <span className="text-lg text-white/70 ml-2">/año</span>
              </div>
              <div className="flex items-center mb-5 space-x-2">
                <span className="text-red-400">Después $342</span>
              </div>
            </div>
          </div>

          {/* Right column - Features */}
          <div className="w-full lg:w-5/12 bg-[#0c0a08]/80 backdrop-blur-sm rounded-3xl p-8 border border-[#C9A880]/20 shadow-xl">
            <h3 className="text-xl font-bold text-white mb-6">Incluye:</h3>

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
                <span className="text-[#C9A880] font-medium">BONUS - Llamada 1-1 con Adrià Estévez</span>
              </div>
            </div>


            {/* CTA Button */}
            <a href="https://www.skool.com/arquitectos-ia-5565" target="_blank" rel="noopener noreferrer">
              <RainbowButtonDemo className="w-full py-4 text-lg font-medium">
                <span className="flex items-center justify-center">
                  <span className="text-xs sm:text-sm md:text-base">Unirme ahora</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </RainbowButtonDemo>
            </a>
            
          </div>
        </div>

        {/* Testimonials Section */}
        <div className="relative py-16 mt-16">
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="text-[#C9A880] font-semibold mb-2">Testimonios de la Comunidad</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
                <span className="text-white">Personas No Técnicas Que Ahora </span>
                <span className="bg-gradient-to-r from-[#C9A880] via-[#D4B896] to-[#C9A880] bg-clip-text text-transparent">
                  Construyen Apps Reales
                </span>
              </h2>
              <p className="text-white/70 text-lg">
                97% de nuestros estudiantes de la comunidad dicen: "Debería haber empezado antes"
              </p>
            </motion.div>

            {/* Testimonials Discord-style Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              {/* Masonry-style testimonials layout inspired by Discord messages */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    variants={itemVariants}
                    className="break-inside-avoid mb-4"
                    style={{
                      transform: `translateY(${(index % 3) * 20}px)`
                    }}
                  >
                    <div className="relative group transition-transform duration-300 hover:scale-105">
                      <div className="bg-[#0c0a08]/80 border border-[#C9A880]/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:border-[#C9A880]/40 transition-all duration-300">
                        <Image
                          src={testimonial.image}
                          alt={`Testimonio de ${testimonial.author}`}
                          width={600}
                          height={800}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <a href="https://www.skool.com/arquitectos-ia-5565" target="_blank" rel="noopener noreferrer">
                <RainbowButtonDemo className="px-12 py-6 text-xl font-bold">
                  <span className="flex items-center justify-center">
                    <span>Únete a +40 Estudiantes</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </RainbowButtonDemo>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
