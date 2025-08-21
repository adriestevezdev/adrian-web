"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDownIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

interface LessonModule {
  id: number;
  title: string;
  duration: string;
  isFree?: boolean;
  isExpanded?: boolean;
  description?: string;
}

export function AIBlueprintCurriculum() {
  const [expandedModule, setExpandedModule] = useState<number | null>(null);

  const testimonial = {
    text: "As someone brand new to coding, this course has been fantastic. The lessons strike a perfect balance between clarity and ambition. This is one of the best investments in my own journey. For example, Supabase for user authentication with and through a template was perfect and worked on the first try.",
    author: "Shawn Hank",
    role: "Tech Enthusiast"
  };

  const modules: LessonModule[] = [
    {
      id: 1,
      title: "Getting Started",
      duration: "6 min",
      description: "Set up your development environment and understand the AI-first approach to building applications."
    },
    {
      id: 2,
      title: "Install Your App Builder Tools",
      duration: "16 min",
      isFree: true,
      description: "Download and configure all the essential no-code and AI tools you'll need for the entire course."
    },
    {
      id: 3,
      title: "Build Your First Working Button",
      duration: "17 min",
      description: "Create your first interactive component using AI assistance and visual builders."
    },
    {
      id: 4,
      title: "Turn Your Idea Into a Blueprint",
      duration: "19 min",
      description: "Learn to translate your app concept into a structured plan that AI can help you execute."
    },
    {
      id: 5,
      title: "Add User Login to Your App",
      duration: "20 min",
      description: "Implement secure user authentication using modern tools like Supabase without writing code."
    },
    {
      id: 6,
      title: "Understanding Your App's Structure",
      duration: "25 min",
      description: "Master the architecture patterns that make scalable applications, explained for non-technical minds."
    },
    {
      id: 7,
      title: "Design Your App's Main Screen",
      duration: "31 min",
      description: "Create beautiful, professional interfaces using design systems and AI-powered layout tools."
    },
    {
      id: 8,
      title: "Make Your App Look Professional",
      duration: "28 min",
      description: "Apply advanced styling techniques and visual polish to create market-ready applications."
    },
    {
      id: 9,
      title: "Save and Backup Your Work",
      duration: "24 min",
      isFree: true,
      description: "Establish robust version control and backup systems to protect your application development."
    },
    {
      id: 10,
      title: "Make Your App Smart With AI",
      duration: "39 min",
      description: "Integrate AI capabilities like chat, image generation, and data analysis into your application."
    },
    {
      id: 11,
      title: "Add AI Features Users Love",
      duration: "37 min",
      description: "Implement advanced AI features that provide real value to your users and differentiate your app."
    },
    {
      id: 12,
      title: "Make Your App Even Smarter With AI",
      duration: "42 min",
      description: "Advanced AI integration techniques for creating truly intelligent application experiences."
    },
    {
      id: 13,
      title: "Connect Stripe (& Get Paid)",
      duration: "29 min",
      description: "Set up payment processing, subscriptions, and monetization for your application."
    },
    {
      id: 14,
      title: "Set Up Subscriptions",
      duration: "31 min",
      description: "Create recurring revenue models with subscription tiers and automated billing."
    },
    {
      id: 15,
      title: "Protect Your App From Hackers",
      duration: "28 min",
      description: "Implement essential security measures and best practices for production applications."
    },
    {
      id: 16,
      title: "Go Live and Get Your First User",
      duration: "23 min",
      description: "Deploy your application to production and acquire your first paying customers."
    }
  ];

  const toggleModule = (moduleId: number) => {
    setExpandedModule(expandedModule === moduleId ? null : moduleId);
  };

  return (
    <section className="relative bg-[#0a0a0a] py-16">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-blue-900/10 to-[#0a0a0a]" />
      

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
        {/* Testimonial Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <span key={i} className="text-yellow-400 text-xl">⭐</span>
            ))}
          </div>
          
          <blockquote className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-6 leading-relaxed">
            "{testimonial.text}"
          </blockquote>
          
          <div className="flex items-center justify-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#C9A880] to-[#8B7355] flex items-center justify-center">
              <span className="text-sm font-semibold text-white">
                {testimonial.author.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <div className="text-left">
              <div className="text-white font-semibold">{testimonial.author}</div>
              <div className="text-gray-400 text-sm">{testimonial.role}</div>
            </div>
          </div>
        </motion.div>

        {/* Curriculum Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="text-[#C9A880] font-semibold mb-2">Curriculum</div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-white">Learn </span>
            <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
              Vibe Coding
            </span>
            <span className="text-white"> for</span>
            <br />
            <span className="text-white">Non-Technical People!</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Every lesson is designed to be practical and immediately applicable
          </p>
        </motion.div>

        {/* Curriculum Modules */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="space-y-2">
            {modules.map((module, index) => (
              <div
                key={module.id}
                className="bg-[#1a1a1a] border border-gray-700 rounded-lg overflow-hidden hover:border-gray-600 transition-colors"
              >
                <button
                  onClick={() => toggleModule(module.id)}
                  className="w-full flex items-center justify-between p-4 text-left hover:bg-[#2a2a2a] transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-gray-400 font-mono text-sm min-w-[40px]">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-medium">{module.title}</div>
                    </div>
                    {module.isFree && (
                      <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                        Free Preview
                      </span>
                    )}
                    <div className="text-gray-400 text-sm min-w-[50px] text-right">
                      {module.duration}
                    </div>
                  </div>
                  <div className="ml-4">
                    {expandedModule === module.id ? (
                      <ChevronDownIcon className="w-5 h-5 text-gray-400" />
                    ) : (
                      <ChevronRightIcon className="w-5 h-5 text-gray-400" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {expandedModule === module.id && module.description && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-700"
                    >
                      <div className="p-4 text-gray-300 text-sm bg-[#151515]">
                        {module.description}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}