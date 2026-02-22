"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function AIPlantillaFAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "¿Tienen política de reembolso?",
      answer: "¡Sí! Ofrecemos una garantía de devolución de dinero de 14 días. Si no estás completamente satisfecho con la formación, te reembolsamos tu compra completa, sin preguntas."
    },
    {
      id: 2,
      question: "¿Para quién es la formación?",
      answer: "La formación + comunidad está diseñada para developers, personas no técnicas, emprendedores y dueños de negocios que quieren construir sus propias aplicaciones sin aprender programación tradicional. Es perfecta para personas que tienen ideas pero no quieren contratar desarrolladores."
    },
    {
      id: 3,
      question: "¿Qué aprenderé?",
      answer: "Cubre todo desde configurar tu entorno de desarrollo hasta desplegar una aplicación completa con funciones de IA, autenticación de usuarios, pagos y más. Aprenderás a usar herramientas, asistentes de IA y plataformas modernas para construir aplicaciones profesionales."
    },
    {
      id: 4,
      question: "¿Necesito habilidades de programación?",
      answer: "¡No! La comunidad está preparada para todo tipo de niveles, aunque si ya tienes una base obtendrás resultados mucho más rapido. Usamos constructores visuales, asistentes de IA y plataformas no-code para crear aplicaciones."
    },
    {
      id: 5,
      question: "¿Qué herramientas de IA se usan?",
      answer: "Usamos una variedad de herramientas de IA incluyendo Claude, ChatGPT, Cursor AI y otros asistentes de desarrollo impulsados por IA. Aprenderás cómo hacer prompts efectivos con estas herramientas e integrar capacidades de IA en tus aplicaciones."
    },
    {
      id: 6,
      question: "¿Qué pasa si me quedo atascado?",
      answer: "Tendrás acceso a nuestra comunidad exclusiva donde puedes hacer preguntas y obtener ayuda tanto de mí como de otros estudiantes. Además, tienes acceso directo a mí para orientación personalizada cuando la necesites."
    },
    {
      id: 7,
      question: "¿Hay costos adicionales?",
      answer: "El curso cubre herramientas gratuitas y de pago. Mientras que muchas herramientas tienen niveles gratuitos suficientes para aprender, algunas características avanzadas o despliegues en producción pueden requerir suscripciones de pago a servicios de terceros (como hosting o APIs de IA)."
    },
    {
      id: 8,
      question: "¿Qué son las actualizaciones de por vida?",
      answer: "Como las herramientas de IA y no-code evolucionan rápidamente, actualizo continuamente el contenido del curso para reflejar las mejores prácticas y herramientas más recientes. Una vez que compras, obtienes acceso a todas las actualizaciones futuras sin costo adicional."
    },
    {
      id: 9,
      question: "¿Es esto como Lovable o Replit?",
      answer: "Aunque sí cubrimos algunas plataformas de desarrollo impulsadas por IA, este curso va mucho más profundo. Aprenderás los principios detrás de la construcción de aplicaciones escalables, no solo cómo usar herramientas específicas. Este conocimiento se transfiere entre plataformas y te servirá a largo plazo."
    }
  ];

  const toggleFAQ = (faqId: number) => {
    setExpandedFAQ(expandedFAQ === faqId ? null : faqId);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-blue-900/5 to-[#0a0a0a]" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Preguntas </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Frecuentes
            </span>
          </h2>
        </motion.div>

        {/* FAQ Items */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          {faqItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors"
            >
              <button
                onClick={() => toggleFAQ(item.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-[#2a2a2a] transition-colors"
              >
                <span className="text-white font-medium text-lg pr-4">{item.question}</span>
                <motion.div
                  animate={{ rotate: expandedFAQ === item.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-shrink-0"
                >
                  <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                </motion.div>
              </button>

              <AnimatePresence>
                {expandedFAQ === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-gray-700"
                  >
                    <div className="p-6 text-gray-300 leading-relaxed bg-[#151515]">
                      {item.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>

        {/* Footer Contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-12 pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 mb-2">
            © 2025 Adria Estevez. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="text-gray-500">¿Necesitas ayuda?</span>
            <a
              href="mailto:contacto@adriaestevez.com"
              aria-label="Enviar correo a contacto@adriaestevez.com"
              className="text-blue-400 hover:text-blue-300 transition-colors"
            >
              ✉
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}