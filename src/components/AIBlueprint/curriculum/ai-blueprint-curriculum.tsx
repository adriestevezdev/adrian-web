"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface LessonModule {
  id: number;
  title: string;
  duration: string;
  isFree?: boolean;
  isExpanded?: boolean;
  description?: string;
}

export function AIBlueprintCurriculum() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const testimonial = {
    text: "Como alguien completamente nuevo en programación, este bootcamp ha sido fantástico. Las lecciones logran un equilibrio perfecto entre claridad y ambición. Esta es una de las mejores inversiones en mi propio camino. Por ejemplo, Supabase para autenticación de usuario funcionó perfectamente desde el primer intento.",
    author: "Shawn Hank",
    role: "Entusiasta de la Tecnología"
  };

  const modules: LessonModule[] = [
    {
      id: 1,
      title: "Primeros Pasos",
      duration: "6 min",
      description: "Configura tu entorno de desarrollo y entiende el enfoque AI-first para construir aplicaciones."
    },
    {
      id: 2,
      title: "Instala tus Herramientas de Construcción",
      duration: "16 min",
      isFree: true,
      description: "Descarga y configura todas las herramientas no-code e IA esenciales que necesitarás para todo el bootcamp."
    },
    {
      id: 3,
      title: "Construye tu Primer Botón Funcional",
      duration: "17 min",
      description: "Crea tu primer componente interactivo usando asistencia de IA y constructores visuales."
    },
    {
      id: 4,
      title: "Convierte tu Idea en un Plan",
      duration: "19 min",
      description: "Aprende a traducir el concepto de tu app en un plan estructurado que la IA puede ayudarte a ejecutar."
    },
    {
      id: 5,
      title: "Añade Login de Usuario a tu App",
      duration: "20 min",
      description: "Implementa autenticación segura de usuarios usando herramientas modernas como Supabase sin escribir código."
    },
    {
      id: 6,
      title: "Entendiendo la Estructura de tu App",
      duration: "25 min",
      description: "Domina los patrones de arquitectura que hacen aplicaciones escalables, explicado para mentes no técnicas."
    },
    {
      id: 7,
      title: "Diseña la Pantalla Principal de tu App",
      duration: "31 min",
      description: "Crea interfaces hermosas y profesionales usando sistemas de diseño y herramientas de layout potenciadas por IA."
    },
    {
      id: 8,
      title: "Haz que tu App se Vea Profesional",
      duration: "28 min",
      description: "Aplica técnicas avanzadas de estilo y pulido visual para crear aplicaciones listas para el mercado."
    },
    {
      id: 9,
      title: "Guarda y Respalda tu Trabajo",
      duration: "24 min",
      isFree: true,
      description: "Establece sistemas robustos de control de versiones y respaldos para proteger el desarrollo de tu aplicación."
    },
    {
      id: 10,
      title: "Haz tu App Inteligente con IA",
      duration: "39 min",
      description: "Integra capacidades de IA como chat, generación de imágenes y análisis de datos en tu aplicación."
    },
    {
      id: 11,
      title: "Añade Funciones de IA que los Usuarios Aman",
      duration: "37 min",
      description: "Implementa funciones avanzadas de IA que proporcionan valor real a tus usuarios y diferencian tu app."
    },
    {
      id: 12,
      title: "Haz tu App Aún Más Inteligente con IA",
      duration: "42 min",
      description: "Técnicas avanzadas de integración de IA para crear experiencias de aplicación verdaderamente inteligentes."
    },
    {
      id: 13,
      title: "Conecta Stripe (y Cobra)",
      duration: "29 min",
      description: "Configura procesamiento de pagos, suscripciones y monetización para tu aplicación."
    },
    {
      id: 14,
      title: "Configura Suscripciones",
      duration: "31 min",
      description: "Crea modelos de ingresos recurrentes con niveles de suscripción y facturación automatizada."
    },
    {
      id: 15,
      title: "Protege tu App de Hackers",
      duration: "28 min",
      description: "Implementa medidas de seguridad esenciales y mejores prácticas para aplicaciones en producción."
    },
    {
      id: 16,
      title: "Lanza y Consigue tu Primer Usuario",
      duration: "23 min",
      description: "Despliega tu aplicación en producción y consigue tus primeros clientes pagantes."
    }
  ];

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-blue-900/10 to-[#0a0a0a]" />
      

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">⭐</span>
            ))}
          </div>
          
          <blockquote className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            "{testimonial.text}"
          </blockquote>
          
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A880] to-[#8B7355] flex items-center justify-center">
              <span className="text-sm font-semibold text-white">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-gray-400 text-sm">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>

        {/* Curriculum Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-[#C9A880] font-semibold mb-2">Currículum</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Aprende </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Vibe Coding
            </span>
            <span className="text-white"> para</span>
            <br />
            <span className="text-white">Personas Sin Experiencia Técnica</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Cada lección está diseñada para ser práctica y aplicable inmediatamente
          </p>
        </motion.div>

        {/* Curriculum Modules */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-2">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors"
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-gray-400 font-mono text-sm min-w-[40px]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{module.title}</div>
                    </div>
                    {module.isFree && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Vista Previa Gratis
                      </span>
                    )}
                    <div className="text-gray-400 text-sm min-w-[50px] text-right">
                      {module.duration}
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedModule === module.id ? (
                      <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedModule === module.id && module.description && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700"
                    >
                      <div className="p-4 text-gray-300 text-sm bg-[#151515]">
                        {module.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}