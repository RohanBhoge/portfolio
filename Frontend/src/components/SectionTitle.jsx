import React from 'react';
import { motion } from 'framer-motion';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <div className="mb-16 text-center">
      <motion.span 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-blue-400 text-sm font-bold uppercase tracking-widest block mb-2"
      >
        {subtitle}
      </motion.span>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-3xl md:text-5xl font-bold text-white relative inline-block"
      >
        {title}
        <span className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></span>
      </motion.h2>
    </div>
  );
};

export default SectionTitle;
