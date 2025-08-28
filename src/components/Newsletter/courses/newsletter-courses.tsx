"use client";

import { Code, Users, Lightbulb, Clock, Database, Layout, Server, TestTube, BarChart, BookOpen, Brain, Rocket, ChevronDown, ChevronUp } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

import { MagicCard } from "@/components/magicui/magic-card";


// Tecnologías con sus rutas de imágenes
const techImages = {
  "Pydantic IA": "/tecnologias/pydanticai.webp",
  "n8n": "/tecnologias/n8n.webp",
  "LangGraph": "/tecnologias/langgraph.webp",
  "Claude MCP": "/tecnologias/claudemcp.webp",
  "Docker": "/tecnologias/docker.webp",
  "React": "/tecnologias/react.webp",
  "Supabase": "/tecnologias/supabase.webp",
  "Stripe": "/tecnologias/stripe.webp",
  "Cursor": "/tecnologias/cursor.webp",
  "Windsurf": "/tecnologias/windsurf.webp",
  "Cline": "/tecnologias/cline.webp",
  "Roo Code": "/tecnologias/roocode.webp",
  "OpenAI": "/tecnologias/openai.webp",
  "Claude": "/tecnologias/claude.webp",
  "Qwen": "/tecnologias/qwen.webp",
  "Mistral": "/tecnologias/mistral.webp"
};

// Definición de los módulos del curso
const courseModules = [
  {
    id: 1,
    title: "Vibe Coding Estructurado",
    description: "Aprende el proceso de Vibe Coding estructurado para construir soluciones IA robustas.",
    available: true,
    icon: <BookOpen />
  },
  {
    id: 2,
    title: "Agentes de IA",
    description: "Aprende el proceso de principio a fin para planificar, construir y desplegar agentes IA.",
    available: true,
    icon: <Clock />
  },
  {
    id: 3,
    title: "Sistemas IA con MCPs",
    description: "Aprende a construir sistemas IA con MCPs para monetizarlos.",
    available: true,
    icon: <Lightbulb />
  },
  {
    id: 4,
    title: "Crear Clientes MCP",
    description: "Aprende a crear clientes MCP para interactuar con tus sistemas IA y servidores MCP.",
    available: true,
    icon: <Code />
  },
  {
    id: 5,
    title: "Crear Servidores MCP",
    description: "Aprende a crear servidores MCP para interactuar con tus sistemas IA y clientes MCP.",
    available: true,
    icon: <Layout />
  },
  {
    id: 6,
    title: "Langchain y Streamlit",
    description: "Aprende a usar Langchain y Streamlit para construir aplicaciones IA interactivas.",
    available: true,
    icon: <Server />
  },
  {
    id: 7,
    title: "Arquitecturas Avanzadas para Agentes",
    description: "Explora flujos de trabajo y patrones arquitectónicos complejos para casos de uso avanzados.",
    available: false,
    icon: <Brain />
  },
  {
    id: 8,
    title: "Construcción de Agentes IA con Pydantic",
    description: "Construye un agente IA completo usando Pydantic - un framework robusto para agentes IA en Python.",
    available: false,
    icon: <TestTube />
  },
  {
    id: 9,
    title: "Evaluación de Agentes IA",
    description: "Domina técnicas para evaluar y mejorar el rendimiento de los agentes IA.",
    available: false,
    icon: <BarChart />
  },
  {
    id: 10,
    title: "Guías Extra",
    description: "Guías adicionales y técnicas avanzadas para llevar tus habilidades de IA al siguiente nivel.",
    available: false,
    icon: <Rocket />
  }
];

// Cursos adicionales próximamente
const upcomingCourses = [
  {
    id: 1,
    title: "Agentes de Conocimiento Avanzado",
    description: "Domina RAG, Memoria y técnicas avanzadas para construir potentes agentes de conocimiento.",
    icon: <BookOpen className="h-10 w-10 text-white" />
  },
  {
    id: 2,
    title: "Agentes IA para el Mundo Real",
    description: "Aprende a construir agentes IA para casos de uso específicos del mundo real y aplicaciones empresariales.",
    icon: <Rocket className="h-10 w-10 text-white" />
  },
  {
    id: 3,
    title: "Inmersión en IA Local",
    description: "Guía completa para usar IA local para mayor privacidad, control y reducción de costes.",
    icon: <Database className="h-10 w-10 text-white" />
  }
];

// Herramientas y frameworks
const tools = [
  "Pydantic IA",
  "n8n",
  "LangGraph",
  "Claude MCP",
  "Docker",
  "React",
  "Supabase",
  "Stripe"
];

// IDEs y LLMs
const ides = [
  "Cursor",
  "Windsurf",
  "Cline",
  "Roo Code"
];

const llms = [
  "OpenAI",
  "Claude",
  "Qwen",
  "Mistral"
];

// Componente para elementos del FAQ
const FAQItem = ({ question, answer }: { question: string; answer: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-[#C9A880]/20 last:border-b-0 py-5">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h4 className="text-lg font-medium">{question}</h4>
        <div className="flex items-center justify-center w-8 h-8 rounded-full bg-black/40 border border-[#C9A880]/30 text-[#C9A880]">
          {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
        </div>
      </button>

      <div
        className={`mt-3 text-gray-400 overflow-hidden transition-all duration-300 ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <p className="pb-2">{answer}</p>
      </div>
    </div>
  );
};

// Componente para cada módulo del curso
const ModuleCard = ({ module }: { module: typeof courseModules[0] }) => {
  return (
    <div className="bg-[#0a0a0a] border border-[#C9A880]/20 hover:border-[#C9A880]/40 rounded-xl p-6 transition-all duration-300">
      <div className="flex items-start space-x-4">
        <div className="bg-black/60 rounded-lg p-3 border border-[#C9A880]/20">
          {module.icon}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-3">
            <div className="bg-[#131313] px-3 py-1 rounded-full text-xs">
              Módulo {module.id}
            </div>
            <div className={`text-xs px-3 py-1 rounded-full ${module.available ? 'bg-[#C9A880]/20 text-[#C9A880]' : 'bg-gray-800/30 text-gray-400'}`}>
              {module.available ? 'Disponible en Lanzamiento' : 'Próximamente'}
            </div>
          </div>
          <h3 className="text-lg font-bold mb-2">{module.title}</h3>
          <p className="text-sm text-gray-400">{module.description}</p>
        </div>
      </div>
    </div>
  );
};

// Componente para cursos próximos
const UpcomingCourseCard = ({ course }: { course: typeof upcomingCourses[0] }) => {
  return (
    <div className="bg-[#0a0a0a] border border-[#C9A880]/20 hover:border-[#C9A880]/40 rounded-xl p-8 transition-all duration-300 flex flex-col h-full">
      <div className="flex-1 flex flex-col items-center justify-center text-center pt-4">
        <div className="bg-black/60 rounded-full p-5 mb-6 w-20 h-20 flex items-center justify-center border border-[#C9A880]/20 mt-4">
          <div className="flex items-center justify-center">
            {course.icon}
          </div>
        </div>
        <h3 className="text-xl font-bold mb-4">{course.title}</h3>
        <p className="text-sm text-gray-400">{course.description}</p>
      </div>
    </div>
  );
};

export function NewsletterCourses() {
  return (
    <section className="relative py-24 pb-36 bg-[#0a0a0a]">
      {/* Fondos con gradientes */}
      <div className="absolute inset-0 flex items-center justify-center -z-10">
        <div className="h-full w-full bg-gradient-to-r from-[#C9A880]/20 to-[#C9A880]/10 blur-[120px]" />
      </div>

      <div className="container mx-auto px-4">


        {/* Preguntas Frecuentes */}
        <div className="mt-24">
          <h3 className="text-2xl font-bold mb-3 text-center">
            Las Dudas que TODOS <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">Me Preguntan</span>
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-center mb-12">
            Estas son las preguntas que me hacen a diario y aquí tienes las respuestas SIN FILTROS.
          </p>

          <div className="max-w-3xl mx-auto bg-[#0c0c0c]/80 border border-[#C9A880]/20 rounded-xl p-6">
            <FAQItem
              question="¿NECESITO conocimientos previos para empezar?"
              answer="NO necesitas experiencia previa en IA. Mi módulo de introducción está pensado para CUALQUIER nivel. Pero ojo, si ya tienes nociones básicas de programación, avanzarás MÁS RÁPIDO. Lo importante es que tengas GANAS DE APRENDER, el resto lo ponemos nosotros."
            />

            <FAQItem
              question="¿Cómo accedo a TODO el contenido?"
              answer="Es muy simple: únete a la comunidad y tendrás ACCESO INMEDIATO a los primeros módulos. La parte buena es que irás recibiendo nuevo contenido a medida que lo publicamos. Y esto es importante: este contenido NO lo encontrarás en YouTube ni en cursos gratuitos. Es EXCLUSIVO para miembros."
            />

            <FAQItem
              question="¿El contenido se mantiene ACTUALIZADO?"
              answer="Si hay algo que me OBSESIONA es mantener todo al día. La IA cambia cada semana, y me aseguro de que nuestro contenido refleje eso. No como otros cursos que grabaron hace 2 años y siguen vendiendo lo mismo. Actualizamos MENSUALMENTE con nuevos módulos y revisamos TODO el material existente para incorporar los últimos avances. Si compras hoy, tendrás acceso a TODAS las actualizaciones futuras."
            />

            <FAQItem
              question="¿Me ayudarás cuando me atasque o tendré que arreglármelas solo?"
              answer="JAMÁS te dejaré abandonado. Odio cuando pago por un curso y luego no hay nadie que responda mis dudas. Por eso he creado un sistema de soporte COMPLETO: tendrás acceso a un foro EXCLUSIVO para miembros donde puedes preguntar lo que sea (y recibir respuestas en 24h máximo), sesiones semanales de Q&A EN VIVO, y la posibilidad de conectar con otros estudiantes que están en tu mismo camino. Nadie se queda atrás."
            />

            <FAQItem
              question="¿Y si me apunto y luego veo que NO es lo que esperaba?"
              answer="Tranquilo. Lo tengo MUY CLARO: si no estás satisfecho, no quiero tu dinero. Por eso ofrezco una garantía COMPLETA de 14 días. Prueba el contenido, explora la comunidad, haz preguntas, y si después de todo eso sientes que no es para ti... te devuelvo TODO tu dinero sin hacer preguntas incómodas. Así de simple. Sin letra pequeña, sin excusas. No quiero que nadie se quede con algo que no le APORTA VALOR."
            />

            <FAQItem
              question="¿Qué tipo de SOPORTE ofreces EXACTAMENTE?"
              answer="He creado un sistema de soporte MULTICAPA: 1) Acceso a la comunidad privada donde conectarás con otros estudiantes QUE ESTÁN HACIENDO LO MISMO que tú, 2) Sesiones grupales SEMANALES donde resolvemos dudas en directo, 3) La posibilidad de programar sesiones 1-a-1 de mentoría (sí, conmigo), y 4) Soporte técnico garantizado en menos de 24 HORAS para cualquier pregunta o problema. En resumen: NUNCA estarás solo en este viaje."
            />

          </div>
        </div>


        {/* Espaciador adicional para resolver el problema de color con el footer */}
        <div className="h-16"></div>
      </div>
    </section>
  );
}
