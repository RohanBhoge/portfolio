import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { PROJECTS } from '../constants/data';

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-gray-950 snap-start">
            <div className="container mx-auto px-6">
                <SectionTitle title="Featured Projects" subtitle="Portfolio" />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-blue-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10"
                        >
                            <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="block w-full h-full cursor-pointer">
                                {/* Image Overlay */}
                                <div className="relative h-48 overflow-hidden">
                                    <div className="absolute inset-0 bg-gray-900/20 group-hover:bg-gray-900/60 transition-colors z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                                    />
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="px-3 py-1 bg-gray-800 text-blue-400 text-xs font-medium rounded-full border border-gray-700"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
