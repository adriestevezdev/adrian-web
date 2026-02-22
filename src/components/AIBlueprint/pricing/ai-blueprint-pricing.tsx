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
            <span className="text-white">Únete a más de </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              200 alumnos
            </span>
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

                {/* Right Side - Contact CTA */}
                <div className="p-8 bg-[#111111] flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <div className="text-gray-400 text-sm mb-1">Plazas limitadas</div>
                    <div className="text-2xl font-bold text-white mb-2">
                      Pide tu admisión
                    </div>
                    <p className="text-gray-400 text-sm">
                      Escríbeme directamente y te cuento todo sin compromiso.
                    </p>
                  </div>

                  <motion.a
                    href="https://wa.me/34693468959?text=Hola%20Adri%2C%20quiero%20pedir%20la%20admisi%C3%B3n%20a%20AI%20Developer%20Mastery"
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-green-500/25 mb-4"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    Contactar por WhatsApp
                  </motion.a>

                  <div className="text-green-400 text-sm">
                    Respuesta en menos de 24h
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