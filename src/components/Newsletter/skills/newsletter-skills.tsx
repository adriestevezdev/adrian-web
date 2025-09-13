"use client";

import { Check, ExternalLink } from "lucide-react";
import { useTheme } from "next-themes";
import React from "react";

import { AnimatedButton } from "@/components/animatedButton";
import { MagicCard } from "@/components/magicui/magic-card";

export function NewsletterSkills() {
  const { theme } = useTheme();

  const skillTopics = [
    "Arquitectura de Agentes de IA",
    "Vibe Coding estructurado",
    "Sistemas IA con MCPs",
    "Ingeniería de contexto",
    "Subir a producción",
    "Casos de Uso de IA en el Mundo Real",
    "Monetización de Agentes de IA",
    "Crear tu propio SaaS con IA",
    "Herramientas y Frameworks de IA"
  ];

  const stats = [
    {
      percentage: "92%",
      text: "de las empresas planean invertir más en IA en los próximos años, pero solo el 1% considera que su uso de IA es \"maduro\".",
      source: "McKinsey & Company",
      link: "https://www.mckinsey.com/capabilities/mckinsey-digital/our-insights/superagency-in-the-workplace-empowering-people-to-unlock-ais-full-potential-at-work"
    },
    {
      percentage: "82%",
      text: "de las grandes empresas planean implementar agentes para 2027.",
      source: "Capgemini Research Institute",
      link: "https://www.capgemini.com/wp-content/uploads/2024/05/Final-Web-Version-Report-Gen-AI-in-Organization-Refresh.pdf"
    },
    {
      percentage: "80%",
      text: "de todas las interacciones con clientes se proyecta que serán manejadas por IA para 2030.",
      source: "Gartner",
      link: "https://www.gartner.com/en/newsroom/press-releases/2023-08-30-gartner-reveals-three-technologies-that-will-transform-customer-service-and-support-by-2028"
    },
    {
      percentage: "30%",
      text: "de las empresas Fortune 500 ofrecerán servicio solo a través de un canal habilitado por IA para 2028.",
      source: "Gartner",
      link: "https://www.gartner.com/en/newsroom/press-releases/2024-12-11-gartner-predicts-that-30-percent-of-fortune-500-companies-will-offer-service-through-only-a-single-ai-enabled-channel-by-2028"
    }
  ];

  return (
    <section className="py-24 pb-20 bg-black">
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* What You'll Learn Section - Mantener el diseño minimalista actual */}
        <div className="mb-32">
          <div className="flex justify-center mb-6">
            <div className="rounded-full bg-black border border-[#333] px-6 py-3">
              <span className="text-base md:text-lg text-white font-medium">Desarrolla Habilidades FUNDAMENTALES</span>
            </div>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10">
            Lo Que <span className="text-[#C9A880]">Aprenderás</span>
          </h2>

          <p className="text-gray-400 text-base md:text-lg text-center max-w-4xl mx-auto mb-16">
            Nuestro currículum NO es teórico. Todo lo que enseñamos es fruto de EXPERIENCIA REAL
            y está documentado con RESULTADOS REALES. Aquí no vendemos humo.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {skillTopics.map((skill, index) => (
              <div
                key={index}
                className="bg-[#0a0a0a] border-2 border-[#222] hover:border-[#333] rounded-xl p-6 md:p-8 transition-colors duration-300 flex items-center"
              >
                <div className="mr-3 flex-shrink-0">
                  <div className="bg-[#1c1c1c] rounded-full p-2.5">
                    <Check className="h-6 w-6 md:h-7 md:w-7 text-[#C9A880]" />
                  </div>
                </div>
                <span className="text-white text-sm md:text-base">{skill}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Why These Skills Matter Section - Restaurar el diseño con MagicCard */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-10 text-white">
            Por Qué Estas <span className="bg-gradient-to-r from-[#C9A880] to-[#A78355] bg-clip-text text-transparent">Habilidades Importan</span>
          </h2>

          <p className="text-gray-300 text-base md:text-lg text-center max-w-4xl mx-auto mb-16">
            La demanda de experiencia en IA está creciendo rápidamente en TODAS las industrias y quien no se adapte quedará FUERA del mercado.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
            {stats.map((stat, index) => (
              <MagicCard
                key={index}
                className="cursor-pointer p-8 md:p-10 h-auto flex flex-col text-left"
                gradientSize={300}
                gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
                gradientFrom="#C9A880"
                gradientTo="#A78355"
              >
                <div className="flex flex-col h-full">
                  <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#C9A880] mb-5 group-hover:text-white transition-colors duration-300">
                    {stat.percentage}
                  </h3>
                  <p className="text-white mb-6 text-sm md:text-base">
                    {stat.text}
                  </p>

                  <a
                    href={stat.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-[#C9A880]/70 text-base md:text-lg mt-auto hover:text-[#C9A880] transition-colors"
                  >
                    <span>{stat.source}</span>
                    <ExternalLink className="h-5 w-5 md:h-6 md:w-6 ml-2" />
                  </a>
                </div>
              </MagicCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
