"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

import { RainbowButtonDemo } from "@/components/rainbowButton";
import { EmailPopup } from "@/components/Newsletter/email-popup";
import { NewsletterAvatarCircles } from "@/components/Newsletter/newsletter-avatar-circles";

interface Testimonial {
  id: number;
  image: string;
  author: string;
}

export function NewsletterTestimonials() {
  const [showEmailPopup, setShowEmailPopup] = useState(false);

  const handleJoinBootcamp = () => {
    setShowEmailPopup(true);
  };

  const testimonials: Testimonial[] = [
    {
      id: 1,
      image: "/testimonios/Alfonso.jpg",
      author: "Alfonso Valcarcel"
    },
    {
      id: 2,
      image: "/testimonios/Cesar salinas.jpg",
      author: "Cesar Salinas"
    },
    {
      id: 3,
      image: "/testimonios/Alvaro.png",
      author: "Alvaro Arancibia"
    },
    {
      id: 4,
      image: "/testimonios/Marcos.jpg",
      author: "Marcos Valverde"
    },
    {
      id: 5,
      image: "/testimonios/manel hernandez.jpg",
      author: "Manel Hernández"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="relative py-20 bg-[#080604] border-t border-[#C9A880]/15">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0806] to-[#050302] z-10"></div>

      {/* Glow effect for the primary color */}
      <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#C9A880]/8 blur-[120px] z-5"></div>

      <div className="relative z-20 container mx-auto px-6 max-w-6xl">
        {/* Testimonials Section */}
        <div className="relative py-16">
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            {/* Avatar circles above testimonials */}
            <div className="flex items-center justify-center mb-12">
              <NewsletterAvatarCircles className="" />
            </div>

            {/* Section Header */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="text-[#C9A880] font-semibold mb-2">Testimonios de la Comunidad</div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
                <span className="text-white">Personas No Técnicas Que Ahora </span>
                <span className="bg-gradient-to-r from-[#C9A880] via-[#D4B896] to-[#C9A880] bg-clip-text text-transparent">
                  Construyen Apps Reales
                </span>
              </h2>
              <p className="text-white/70 text-lg">
                97% de nuestros estudiantes de la comunidad dicen: "Debería haber empezado antes"
              </p>
            </motion.div>

            {/* Testimonials Discord-style Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              {/* Masonry-style testimonials layout inspired by Discord messages */}
              <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={testimonial.id}
                    variants={itemVariants}
                    className="break-inside-avoid mb-4"
                    style={{
                      transform: `translateY(${(index % 3) * 20}px)`
                    }}
                  >
                    <div className="relative group transition-transform duration-300 hover:scale-105">
                      <div className="bg-[#0c0a08]/80 border border-[#C9A880]/20 rounded-lg overflow-hidden shadow-lg hover:shadow-xl hover:border-[#C9A880]/40 transition-all duration-300">
                        <Image
                          src={testimonial.image}
                          alt={`Testimonio de ${testimonial.author}`}
                          width={600}
                          height={800}
                          className="w-full h-auto object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <div className="text-center mt-16">
              <RainbowButtonDemo 
                onClick={handleJoinBootcamp}
                className="px-12 py-6 text-xl font-bold cursor-pointer"
              >
                <span className="flex items-center justify-center">
                  <span>Únete a +40 Estudiantes</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
              </RainbowButtonDemo>
            </div>
          </div>
        </div>
      </div>
      
      {/* Email Popup */}
      <EmailPopup 
        isOpen={showEmailPopup} 
        onClose={() => setShowEmailPopup(false)} 
        utmSource="waitlist"
        utmMedium="hero_button"
        customFields={[
          { name: "button_location", value: "hero_section" },
          { name: "button_text", value: "Quiero Mi App en 30 Días" }
        ]}
      />
    </section>
  );
}