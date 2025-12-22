import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { SKILLS } from '../constants/data';

const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-gray-900 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/4 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <SectionTitle title="Technical Skills" subtitle="My Arsenal" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS.map((category, index) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-700 hover:border-blue-500/50 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gray-900 rounded-lg text-blue-400 group-hover:text-white group-hover:bg-blue-600 transition-colors">
                  {/* Render icon component properly */}
                  <category.icon size={24} />
                </div>
                <h3 className="text-xl font-bold text-white">{category.category}</h3>
              </div>

              <div className="space-y-4">
                {category.items.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
