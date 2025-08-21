"use client";

import { motion } from "framer-motion";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  rating?: number;
}

export function AIBlueprintTestimonials() {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      text: "Como alguien completamente nuevo en programación, este bootcamp ha sido fantástico. Las lecciones logran un equilibrio perfecto entre claridad y ambición. Esta es una de las mejores inversiones en mi propio camino. Por ejemplo, Supabase para autenticación de usuario funcionó perfectamente desde el primer intento.",
      author: "Shawn Hank",
      role: "Entusiasta de la Tecnología",
      rating: 5
    },
    {
      id: 2,
      text: "Finalmente terminé de distraerme y gastar energía navegando videos de YouTube sobre cómo construir tu app siendo una persona no técnica. La forma en que Adrià enseña es genial. Pasar por las lecciones es un placer.",
      author: "Pavel Szczebel",
      role: "Fundador en Unlearn Knowledge Base",
      rating: 5
    },
    {
      id: 3,
      text: "Al principio, estaba un poco reacio ya que no vengo de un background de programación, pero la forma en que cada concepto se introduce y se construye gradualmente sobre los anteriores lo hizo sorprendentemente accesible.",
      author: "Ratandeep B.",
      role: "Emprendedor",
      rating: 5
    },
    {
      id: 4,
      text: "I checked out free YouTube tutorials for vibe coding but they didn't stick or learning curve. Then I found Rob's paid course, and it's exactly what I was looking for. He explains things clearly, puts himself in a newbie's shoes, and really knows his stuff. I'm super glad I signed up, as Rob taught me a holistic understanding of an app's technical architecture—this is what I wanted to learn to build my own apps (and I am currently working on 3! 😊)",
      author: "Karl von Luckwald",
      role: "Indie & B2B SaaS Entrepreneur",
      rating: 5
    },
    {
      id: 5,
      text: "You have a gift of delivering these topics in such a way that makes it easier to understand, and with great energy. Much appreciated.",
      author: "Chris R.",
      role: "Entrepreneur",
      rating: 5
    },
    {
      id: 6,
      text: "Just our first call together was crazy. Rob showed me how to train AI to write my newsletters in 10 minutes. Before this call, I used to spend at least 1 hour per week writing emails. CRAZY! 😍",
      author: "Peter Benkowitz",
      role: "Founder on Instagram",
      rating: 5
    },
    {
      id: 7,
      text: "Robin does a great job of laying down enough groundwork so that you don't get lost when you start. I see a lot of hype for vibe coding but no real step by step to get started. This course helps you with that. Plus, my favorite part is watching how Robin communicates with the tools to troubleshoot and enhance the outcome. It's like magic when you start everything take shape.",
      author: "James Raffel",
      role: "AI Pioneer",
      rating: 5
    },
    {
      id: 8,
      text: "Robin explains complex concepts in such a simple, clear and structured way. I've been looking for these exact concepts for ages, so grateful to find it packaged in such an easy to digest manner.",
      author: "Kiran Easwaran",
      role: "Entrepreneur",
      rating: 5
    },
    {
      id: 9,
      text: "Rob is the man at making seemingly complex things appear easy to understand. What I really like about his lessons is that they take you on a journey. They are easy to follow, engaging and packed full of really useful tidbits. If it weren't for these lessons I could defo see myself getting frustrated and giving vibe coding up altogether! Rob - the 'code whisperer'",
      author: "George Rowntree",
      role: "No-Code Solopreneur",
      rating: 5
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
      

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[#C9A880] font-semibold mb-2">Testimonios</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">97% Dice </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              "Debería Haber
            </span>
            <br />
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Empezado Antes"
            </span>
          </h2>
          <p className="text-gray-300 text-lg">
            El otro 3% estaba muy ocupado construyendo su segunda app
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              className="bg-[#1a1a1a] border border-gray-700 rounded-xl p-6 hover:border-gray-600 transition-colors"
            >
              {/* Rating */}
              {testimonial.rating && (
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>
              )}

              {/* Testimonial Text */}
              <blockquote className="text-gray-300 text-sm leading-relaxed mb-4">
                "{testimonial.text}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A880] to-[#8B7355] flex items-center justify-center">
                  <span className="text-sm font-semibold text-white">
                    {testimonial.author.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{testimonial.author}</div>
                  <div className="text-gray-400 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}