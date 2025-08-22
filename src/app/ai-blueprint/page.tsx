"use client";

import { useEffect } from "react";
import { AIPlantillaHero } from "@/components/AIBlueprint/hero/ai-blueprint-hero";
import { AIPlantillaCurriculum } from "@/components/AIBlueprint/curriculum/ai-blueprint-curriculum";
import { AIPlantillaTestimonials } from "@/components/AIBlueprint/testimonials/ai-blueprint-testimonials";
import { AIPlantillaPricing } from "@/components/AIBlueprint/pricing/ai-blueprint-pricing";
import { AIPlantillaFAQ } from "@/components/AIBlueprint/faq/ai-blueprint-faq";

export default function AIPlantillaPage() {
  // Implementar scroll suave para los enlaces de anclaje y manejar hash en URL
  useEffect(() => {
    // Función para hacer scroll a un elemento
    const scrollToElement = (elementId: string) => {
      const element = document.getElementById(elementId);
      if (element) {
        const rect = element.getBoundingClientRect();
        const absoluteTop = rect.top + window.scrollY;
        window.scrollTo({
          top: absoluteTop - 100, // Offset para que no quede pegado al borde superior
          behavior: 'smooth'
        });
      }
    };

    // Manejar clics en enlaces de anclaje
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');

      if (anchor && anchor.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.replace('#', '');
        if (targetId) {
          scrollToElement(targetId);
          // Actualizar URL sin recargar
          history.pushState(null, '', `#${targetId}`);
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);

    // Manejar hash en URL al cargar
    const handleInitialHash = () => {
      // Restaurar scroll normal primero
      document.body.style.overflow = '';

      const hash = window.location.hash;
      if (hash) {
        // Dar tiempo a que se renderice todo
        setTimeout(() => {
          const targetId = hash.replace('#', '');
          scrollToElement(targetId);
        }, 500);
      }
    };

    // Asegurar que al cargar la página, solo se vea la sección hero inicialmente
    document.body.style.overflow = 'hidden';

    // Después de un tiempo, restaurar el scroll y manejar hash si existe
    const timer = setTimeout(handleInitialHash, 800);

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      document.body.style.overflow = '';
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div>
        <AIPlantillaHero />
      </div>

      {/* Curriculum Section */}
      <section id="curriculum" className="relative">
        <AIPlantillaCurriculum />
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative">
        <AIPlantillaTestimonials />
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="relative">
        <AIPlantillaPricing />
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative">
        <AIPlantillaFAQ />
      </section>
    </div>
  );
}