"use client";

import { motion } from "framer-motion";

export function AIPlantillaHero() {
  return (
    <section className="relative bg-[#0a0a0a] flex items-center justify-center pt-8 pb-8">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-[#0a0a0a] to-[#0a0a0a]" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Main headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            <span className="text-white">Construye tu Saas con IA</span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Sin Escribir Código
            </span>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Aprende construir, lanzar y conseguir tus primeros clientes
            usando herramientas con agentes y un proceso avanzado pero simplificado.
          </p>
        </motion.div>

        {/* Video preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-12"
        >
          <div className="relative max-w-4xl mx-auto rounded-2xl overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-auto rounded-2xl"
              src="/preview-formacion.mp4"
            />
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="https://wa.me/34693468959?text=Hola%20Adri%2C%20quiero%20pedir%20la%20admisi%C3%B3n%20a%20AI%20Developer%20Mastery"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Quiero crear con IA
          </a>
        </motion.div>
      </div>
    </section>
  );
}