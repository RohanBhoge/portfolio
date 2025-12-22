import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { EXPERIENCE } from '../constants/data';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <SectionTitle title="Experience" subtitle="My Journey" />

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div 
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} relative`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -ml-[5px] md:-ml-[5px] w-4 h-4 rounded-full bg-blue-500 border-4 border-gray-900 shadow-[0_0_10px_rgba(59,130,246,0.5)] z-10 mt-1.5 md:mt-0"></div>

                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12 pl-8' : 'md:pr-12 pl-8'} md:pl-0`}>
                  <div className={`bg-gray-800/50 p-6 rounded-xl border border-gray-700/50 hover:border-blue-500/30 transition-all hover:bg-gray-800 hover:shadow-xl ${index % 2 === 0 ? 'text-left' : 'md:text-right text-left'}`}>
                    <div className={`flex items-center gap-2 mb-2 text-blue-400 ${index % 2 === 0 ? 'justify-start' : 'md:justify-end justify-start'}`}>
                      <Briefcase size={16} />
                      <span className="text-sm font-semibold tracking-wider">{exp.period}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <h4 className="text-gray-400 font-medium mb-4">{exp.company}</h4>
                    <p className="text-gray-400 text-sm leading-relaxed">{exp.description}</p>
                  </div>
                </div>
                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
