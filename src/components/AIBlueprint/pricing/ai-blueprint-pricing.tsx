"use client";

import { motion } from "framer-motion";
import { CheckIcon } from "@heroicons/react/24/outline";

export function AIBlueprintPricing() {
  const features = [
    "16+ Video Lessons",
    "Exclusive Live Streams", 
    "Student Community Access",
    "Direct Access to Me"
  ];

  const companiesUsed = [
    { name: "Claude", logo: "🤖" },
    { name: "Cursor", logo: "⚡" },
    { name: "Vercel", logo: "▲" },
    { name: "Supabase", logo: "⚡" },
    { name: "Stripe", logo: "💳" },
    { name: "OpenAI", logo: "🧠" }
  ];

  return (
    <section className="relative bg-[#0a0a0a] py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-blue-900/10 to-[#0a0a0a]" />
      

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="text-[#C9A880] font-semibold mb-2">AI Coding Blueprint</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Join </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              141+ Non-Coders
            </span>
            <br />
            <span className="text-white">Already Building Apps</span>
          </h2>
          <p className="text-gray-300 text-lg">
            This isn't another course. It's your career pivot.
          </p>
        </motion.div>

        {/* Pricing Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 p-1 rounded-2xl">
            <div className="bg-[#1a1a1a] rounded-2xl border border-gray-700 overflow-hidden">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Left Side - Features */}
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Get Instant Access</h3>
                  <p className="text-gray-300 mb-6">
                    Get the complete blueprint, access to the community, and help when you get stuck.
                  </p>
                  
                  <div className="mb-8">
                    <h4 className="text-blue-400 font-semibold mb-4">What's included</h4>
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                            <CheckIcon className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right Side - Price & CTA */}
                <div className="p-8 bg-[#111111] flex flex-col justify-center items-center text-center">
                  <div className="mb-6">
                    <div className="text-gray-400 text-sm mb-1">Buy once, enjoy for life</div>
                    <div className="text-5xl font-bold text-white mb-2">
                      $847
                      <span className="text-lg text-gray-400 font-normal ml-1">USD</span>
                    </div>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 shadow-lg hover:shadow-blue-500/25 mb-4"
                  >
                    Buy Now
                  </motion.button>

                  <div className="text-blue-400 text-sm">
                    Includes 30-Day Money-Back Guarantee
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Companies Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="text-gray-400 text-sm mb-6 font-medium">
            Built With Leading AI Companies
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {companiesUsed.map((company, index) => (
              <div key={index} className="flex items-center gap-2 text-gray-400">
                <span className="text-2xl">{company.logo}</span>
                <span className="font-semibold text-lg">{company.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}