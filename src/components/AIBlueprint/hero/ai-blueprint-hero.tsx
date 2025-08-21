"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export function AIBlueprintHero() {
  const [email, setEmail] = useState("");

  const testimonialAvatars = [
    { id: 1, name: "Tech Founder", avatar: "/avatars/founder1.jpg" },
    { id: 2, name: "Startup CEO", avatar: "/avatars/founder2.jpg" },
    { id: 3, name: "Entrepreneur", avatar: "/avatars/founder3.jpg" },
    { id: 4, name: "Business Owner", avatar: "/avatars/founder4.jpg" },
    { id: 5, name: "Non-tech Founder", avatar: "/avatars/founder5.jpg" },
  ];

  return (
    <section className="relative min-h-screen bg-[#0a0a0a] flex items-center justify-center pt-16 pb-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]" />
      

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-[#C9A880] to-[#8B7355] p-1">
            <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
              <span className="text-2xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        {/* Testimonials avatars row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-2 mb-2"
        >
          <div className="flex -space-x-2">
            {testimonialAvatars.map((avatar, index) => (
              <div
                key={avatar.id}
                className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-[#0a0a0a] flex items-center justify-center text-xs"
                style={{ zIndex: testimonialAvatars.length - index }}
              >
                {avatar.name.split(' ').map(n => n[0]).join('')}
              </div>
            ))}
          </div>
          <span className="text-gray-400 text-sm ml-3">Únete a 147+ emprendedores sin experiencia técnica</span>
        </motion.div>

        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-8"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Construye tu Saas en 30 Días</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Sin Escribir Código
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aprende con Vibe Coding a construir, lanzar y conseguir tus primeros clientes 
            usando herramientas no-code y un proceso simple de 30 días.
          </p>
        </motion.div>

        {/* Demo preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-8 rounded-2xl border border-blue-500/30">
              <div className="bg-[#1a1a1a] rounded-xl p-6 border border-gray-700">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-gray-400 text-sm ml-4">Sin necesidad de escribir código</span>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-[#2a2a2a] rounded-lg p-4 border border-gray-600">
                    <h3 className="text-[#C9A880] font-semibold mb-2">Construye Apps Profesionales Sin Código</h3>
                    <p className="text-gray-300 text-sm">
                      Crea aplicaciones profesionales usando herramientas de IA y plataformas no-code. 
                      Perfecto para emprendedores y dueños de negocios.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex-1 bg-[#2a2a2a] rounded-lg p-3 border border-gray-600">
                      <div className="text-blue-400 text-sm font-medium">Cómo funciona Vibe Coding</div>
                      <div className="text-gray-400 text-xs mt-1">
                        Planifica tu aplicación con prompts simples y despliega en horas...
                      </div>
                    </div>
                    
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#C9A880] to-[#8B7355] p-1">
                      <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                        <span className="text-sm">💡</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-600 text-white px-4 py-2 rounded-lg text-center font-medium">
                    Carlos lanzó su primer SaaS
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
            Quiero crear con IA
          </button>
        </motion.div>
      </div>
    </section>
  );
}