"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export function AIPlantillaPricing() {
  const features = [
    "+55 Lecciones en Video",
    "Llamadas en Vivo Exclusivas", 
    "Acceso a la Comunidad de Estudiantes",
    "Acceso Directo Conmigo"
  ];

  const companiesUsed = [
    { name: "Claude", logo: "/tecnologias/claude.webp", isImage: true },
    { name: "Cursor", logo: "/tecnologias/cursor.webp", isImage: true },
    { name: "Vercel", logo: "▲", isImage: false },
    { name: "Supabase", logo: "/tecnologias/supabase.webp", isImage: true },
    { name: "Stripe", logo: "/tecnologias/stripe.webp", isImage: true },
    { name: "OpenAI", logo: "/tecnologias/openai.webp", isImage: true }
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-blue-900/10 to-[#0a0a0a]" />
      

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[#C9A880] font-semibold mb-2">La Comunidad Desarrollo con IA</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Únete a </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              +40 Emprendedores
            </span>
            <br />
            <span className="text-white">Ya Construyendo Apps</span>
          </h2>
          <p className="text-gray-300 text-lg">
            Esto no es otro curso. Es tu cambio de carrera profesional.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-1 rounded-2xl">
            <div className="bg-[#1a1a1a] rounded-2xl border border-gray-700 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Features */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Obtén Acceso Instantáneo</h3>
                  <p className="text-gray-300 mb-6">
                    Obtén la plantilla completa, acceso a la comunidad y ayuda cuando te quedes atascado.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-blue-400 font-semibold mb-4">Qué está incluido</h4>
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Price & CTA */}
                <div className="p-8 bg-[#111111] flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <div className="text-gray-400 text-sm mb-1">Compra una vez, disfruta de por vida</div>
                    <div className="text-5xl font-bold text-white mb-2">
                      $847
                      <span className="text-lg text-gray-400 font-normal ml-1">USD</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 mb-4"
                  >
                    Comprar Ahora
                  </motion.button>

                  <div className="text-blue-400 text-sm">
                    Incluye Garantía de Devolución de 30 Días
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="text-gray-400 text-sm mb-6 font-medium">
            Construido con Empresas Líderes en IA
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companiesUsed.map((company, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400">
                {company.isImage ? (
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={24}
                    height={24}
                    className="w-6 h-6 object-contain"
                  />
                ) : (
                  <span className="text-2xl">{company.logo}</span>
                )}
                <span className="font-semibold text-lg">{company.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}