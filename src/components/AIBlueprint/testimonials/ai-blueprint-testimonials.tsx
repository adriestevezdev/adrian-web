"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  image: string;
  author: string;
}

export function AIPlantillaTestimonials() {
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
    <section className="relative bg-[#0a0a0a] py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-blue-900/5 to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
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
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Construyen Apps Reales
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
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
                  <div className="bg-[#2f3136] border border-[#40444b] rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
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
          <a
            href="https://wa.me/34693468959?text=Hola%20Adri%2C%20quiero%20pedir%20la%20admisi%C3%B3n%20a%20Arquitectos%20IA"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-12 py-6 rounded-xl font-bold text-xl transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25"
          >
            Únete a +60 Estudiantes
          </a>
        </div>
      </div>
    </section>
  );
}