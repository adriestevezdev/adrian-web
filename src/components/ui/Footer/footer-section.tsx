"use client";

import { motion } from "framer-motion";

function Footerdemo() {
  return (
    <footer className="relative bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#C9A880]/5 to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-8 md:px-10 py-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center pt-10 md:pt-12 border-t-2 border-gray-800"
        >
          <p className="text-gray-400 text-lg md:text-xl mb-4">
            © 2025 Adria Estevez. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center gap-6 text-base md:text-lg">
            <span className="text-gray-500 text-base md:text-lg">¿Necesitas ayuda?</span>
            <div className="flex items-center gap-2">
              <a 
                href="mailto:adria.esmarquez@gmail.com"
                className="text-[#C9A880] hover:text-[#A78355] transition-colors duration-300"
                title="Email"
              >
                <span className="text-xl md:text-2xl">✉</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export { Footerdemo };
