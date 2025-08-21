"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Testimonial {
  id: number;
  image: string;
  author: string;
}

export function AIBlueprintTestimonials() {
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
          <div className="text-[#C9A880] font-semibold mb-2">Testimonios del Bootcamp</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">97% de Nuestros Estudiantes del </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Bootcamp Dicen:
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              "Debería Haber Empezado Antes"
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            El otro 3% estaba muy ocupado construyendo su segunda app con IA
          </p>
        </motion.div>

        {/* Testimonials Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-2 max-w-[1200px] mx-auto"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="relative"
            >
              <Image
                src={testimonial.image}
                alt={`Testimonio de ${testimonial.author}`}
                width={800}
                height={1200}
                className="w-full h-auto"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}