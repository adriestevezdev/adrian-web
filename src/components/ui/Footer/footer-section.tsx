"use client";

import { motion } from "framer-motion";

function Footerdemo() {
  return (
    <footer className="relative bg-[#0a0a0a]">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#C9A880]/5 to-[#0a0a0a]" />
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center pt-8 border-t border-gray-800"
        >
          <p className="text-gray-400 mb-2">
            © 2025 Adria Estevez. Todos los derechos reservados.
          </p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <span className="text-gray-500">¿Necesitas ayuda?</span>
            <div className="flex items-center gap-2">
              <a 
                href="mailto:adria.esmarquez@gmail.com"
                className="text-[#C9A880] hover:text-[#A78355] transition-colors duration-300"
                title="Email"
              >
                ✉
              </a>
              <a 
                href="https://linkedin.com/in/adriaestevez"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#C9A880] hover:text-[#A78355] transition-colors duration-300"
                title="LinkedIn"
              >
                in
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}

export { Footerdemo };
