"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export function AIBlueprintFAQ() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);

  const faqItems: FAQItem[] = [
    {
      id: 1,
      question: "¿Tienen política de reembolso?",
      answer: "¡Sí! Ofrecemos una garantía de devolución de dinero de 30 días. Si no estás completamente satisfecho con el bootcamp, te reembolsamos tu compra completa, sin preguntas."
    },
    {
      id: 2,
      question: "Do you offer discounts?",
      answer: "We occasionally offer limited-time promotions. The best way to stay updated on any discounts is to join our newsletter. However, we believe the course provides exceptional value at its current price."
    },
    {
      id: 3,
      question: "¿Para quién es este bootcamp?",
      answer: "Este bootcamp está diseñado para fundadores no técnicos, emprendedores y dueños de negocios que quieren construir sus propias aplicaciones sin aprender programación tradicional. Es perfecto para personas que tienen ideas de apps pero no quieren contratar desarrolladores costosos."
    },
    {
      id: 4,
      question: "What exactly does the blueprint cover?",
      answer: "The blueprint covers everything from setting up your development environment to deploying a full application with AI features, user authentication, payments, and more. You'll learn to use no-code tools, AI assistants, and modern platforms to build professional applications."
    },
    {
      id: 5,
      question: "¿Necesito habilidades de programación?",
      answer: "¡No! Este bootcamp está específicamente diseñado para personas no técnicas. Usamos constructores visuales, asistentes de IA y plataformas no-code para crear aplicaciones. No necesitas experiencia previa en programación."
    },
    {
      id: 6,
      question: "What computer do I need?",
      answer: "You can use any modern computer - Mac, Windows, or Linux. Most of the tools we use are web-based, so you just need a reliable internet connection and a modern web browser."
    },
    {
      id: 7,
      question: "What AI tools are used?",
      answer: "We use a variety of AI tools including Claude, ChatGPT, Cursor AI, and other AI-powered development assistants. You'll learn how to effectively prompt these tools and integrate AI capabilities into your applications."
    },
    {
      id: 8,
      question: "What if I get stuck?",
      answer: "You'll have access to our exclusive community where you can ask questions and get help from both me and other students. Plus, you get direct access to me for personalized guidance when you need it."
    },
    {
      id: 9,
      question: "Any additional costs?",
      answer: "The course covers free and paid tools. While many tools have free tiers that are sufficient for learning, some advanced features or production deployments may require paid subscriptions to third-party services (like hosting or AI APIs)."
    },
    {
      id: 10,
      question: "What are lifetime updates?",
      answer: "As AI and no-code tools evolve rapidly, I continuously update the course content to reflect the latest best practices and tools. Once you purchase, you get access to all future updates at no additional cost."
    },
    {
      id: 11,
      question: "Is this like Lovable or Replit?",
      answer: "While we do cover some AI-powered development platforms, this course goes much deeper. You'll learn the principles behind building scalable applications, not just how to use specific tools. This knowledge transfers across platforms and will serve you long-term."
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
            © 2025 SUNSTORY F.Z.C & Robin Ebers. All rights reserved.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="text-gray-500">Need help?</span>
            <div className="flex items-center gap-2">
              <span className="text-blue-400">✕</span>
              <span className="text-blue-400">✉</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}