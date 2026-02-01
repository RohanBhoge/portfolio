import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const roles = [
    "Full-Stack Dev",
    "Gen AI Dev",
    "AI Enthusiast"
  ];

  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3000); // Change role every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden pt-16 snap-start">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Centered Content */}
        <div className="max-w-4xl mx-auto">

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            {/* Greeting */}
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-blue-400 font-semibold tracking-wide text-sm md:text-base mb-6 block"
            >
              Hi there! I'm Rohan Bhoge 👋
            </motion.span>

            {/* Rotating Job Titles */}
            <div className="mb-8">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={currentRoleIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl md:text-7xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-500 leading-tight mb-4"
                >
                  {roles[currentRoleIndex]}
                </motion.h1>
              </AnimatePresence>
            </div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-400 text-lg md:text-xl mb-4 leading-relaxed max-w-3xl mx-auto"
            >
              Building digital magic using cutting-edge technology and creativity to craft seamless experiences.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-500 text-base md:text-lg mb-10 leading-relaxed max-w-3xl mx-auto"
            >
              Specializing in modern web development and Gen AI systems.
            </motion.p>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-12"
            >
              <a
                href="#contact"
                className="inline-block px-8 py-4 bg-green-500 text-white rounded-full font-medium hover:bg-green-600 transition-all shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 text-lg"
              >
                Get in Touch
              </a>
            </motion.div>

            {/* Technical Expertise Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <span className="px-5 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm">
                ✓ Full-Stack Development
              </span>
              <span className="px-5 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm">
                ✓ Gen AI Integration
              </span>
              <span className="px-5 py-2 bg-gray-800/50 border border-gray-700 rounded-full text-sm text-gray-300 backdrop-blur-sm">
                ✓ 250+ GitHub projects
              </span>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

export default Hero;
