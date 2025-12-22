import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { PROFILE } from '../constants/data';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-950 relative overflow-hidden pt-16">
      {/* Background Gradients */}
      <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3
              }
            }
          }}
        >
          {/* Profile Image with Float Animation */}
          <motion.div 
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 }
            }}
            className="mb-8 flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="relative"
            >
              <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-900 shadow-[0_0_20px_rgba(59,130,246,0.5)]">
                <img 
                  src="./assets/profile.png" 
                  alt="Rohan Bhoge" 
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.onerror = null; 
                    e.target.src = "https://ui-avatars.com/api/?name=Rohan+Bhoge&background=0D8ABC&color=fff&size=128";
                  }}
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.span 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-blue-400 font-semibold tracking-wide uppercase text-sm mb-4 block"
          >
            Hi there! I'm Rohan Bhoge 👋
          </motion.span>

          <motion.h1 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"
          >
            Turning complex ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
              elegant digital reality
            </span>
          </motion.h1>

          <motion.p 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Building seamless digital experiences from frontend to backend.
          </motion.p>

          <motion.div 
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            className="flex flex-col md:flex-row items-center justify-center gap-4"
          >
            <a 
              href="#projects"
              className="px-8 py-3 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 transition-colors flex items-center gap-2 group shadow-lg shadow-blue-500/20"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact"
              className="px-8 py-3 border border-gray-700 text-gray-300 rounded-full font-medium hover:border-gray-500 hover:text-white transition-all bg-gray-900/50 backdrop-blur-sm"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>

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
