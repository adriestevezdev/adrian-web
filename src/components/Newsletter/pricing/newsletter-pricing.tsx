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

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[#C9A880] font-semibold mb-4">Pricing que Evoluciona Contigo</div>
          <h2 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto leading-tight text-white">
            Únete a Arquitectos IA
          </h2>
          <p className="text-white/70 text-xl mb-12 max-w-2xl mx-auto">
            Bloquea tu precio para siempre.
          </p>
        </motion.div>

        {/* Timeline Section - Now with more prominence */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-12 mb-12">
            {/* Past Price */}
            <div className="flex flex-col items-center relative group">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-red-500/20 border-3 border-red-500 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <span className="text-red-400 font-bold text-2xl">✗</span>
              </div>
              <div className="text-center">
                <div className="text-red-400 font-bold text-lg mb-2">FASE PASADA</div>
                <div className="text-white text-3xl lg:text-4xl font-bold mb-1">$39/mes</div>
                <div className="text-red-400/80 text-sm">Ya no disponible</div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-[#C9A880] text-3xl lg:text-4xl font-bold rotate-90 lg:rotate-0">→</div>

            {/* Current Price - Main focus */}
            <div className="flex flex-col items-center relative group">
              <div className="w-28 h-28 lg:w-32 lg:h-32 rounded-full bg-gradient-to-br from-[#C9A880]/30 to-[#C9A880]/10 border-4 border-[#C9A880] flex items-center justify-center mb-4 animate-pulse shadow-2xl shadow-[#C9A880]/20">
                <span className="text-[#C9A880] font-bold text-3xl">🔥</span>
              </div>
              <div className="text-center relative">
                <div className="bg-gradient-to-r from-[#C9A880] to-[#D4B896] text-black px-6 py-2 rounded-full text-sm font-bold mb-3 shadow-lg">
                  PRECIO ACTUAL
                </div>
                <div className="text-[#C9A880] text-4xl lg:text-5xl font-bold mb-2">$49/mes</div>
                <div className="text-[#C9A880]/80 text-base">Acceso completo</div>
              </div>
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2">
                <div className="bg-green-500 text-white px-4 py-2 rounded-lg text-sm font-bold animate-bounce shadow-lg">
                  TÚ ESTÁS AQUÍ
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="text-white/60 text-3xl lg:text-4xl font-bold rotate-90 lg:rotate-0">→</div>

            {/* Future Price */}
            <div className="flex flex-col items-center relative group">
              <div className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-orange-500/20 border-3 border-orange-500 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                <span className="text-orange-400 font-bold text-2xl">⏳</span>
              </div>
              <div className="text-center">
                <div className="text-orange-400 font-bold text-lg mb-2">PRÓXIMA FASE</div>
                <div className="text-white text-3xl lg:text-4xl font-bold mb-1">$57/mes</div>
                <div className="text-orange-400/80 text-sm">A los 50 miembros</div>
              </div>
            </div>
          </div>

        </motion.div>

        {/* Features Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mb-16"
        >
          <div className="bg-gradient-to-br from-[#0c0a08]/80 to-[#13110d]/60 backdrop-blur-sm rounded-3xl p-12 border border-[#C9A880]/30 shadow-2xl">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">¿Qué incluye tu membresía?</h3>

            <ul className="grid md:grid-cols-2 gap-6 mb-12">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-[#C9A880] mt-1 mr-4 flex-shrink-0"
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
                <span className="text-white text-lg">Acceso a TODOS los cursos actuales y futuros</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-[#C9A880] mt-1 mr-4 flex-shrink-0"
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
                <span className="text-white text-lg">Sesiones en vivo y talleres PRÁCTICOS</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-[#C9A880] mt-1 mr-4 flex-shrink-0"
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
                <span className="text-white text-lg">Acceso a la comunidad privada</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 text-[#C9A880] mt-1 mr-4 flex-shrink-0"
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
                <span className="text-white text-lg">Plantillas y recursos para Vibe Coding Estructurado y Monetización con IA</span>
              </li>
            </ul>

            {/* Bonus features */}
            <div className="border-t border-[#C9A880]/20 pt-8 mb-8">
              <h4 className="text-xl font-bold text-[#C9A880] mb-6 text-center">BONUS EXCLUSIVOS</h4>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-3">🎁</span>
                  <span className="text-[#C9A880] font-medium">Sorteos exclusivos</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-3">💼</span>
                  <span className="text-[#C9A880] font-medium">Bolsa de Trabajo</span>
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className="text-3xl mb-3">📞</span>
                  <span className="text-[#C9A880] font-medium">Llamadas 1-1 con Adrià Estévez</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="text-center">
              <a href="https://www.skool.com/arquitectos-ia-5565" target="_blank" rel="noopener noreferrer">
                <RainbowButtonDemo className="px-16 py-6 text-xl font-bold">
                  <span className="flex items-center justify-center">
                    <span>Unirme Ahora - $49/mes</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-3" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </span>
                </RainbowButtonDemo>
              </a>
            </div>
          </div>
        </motion.div>

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
