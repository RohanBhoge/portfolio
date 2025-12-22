import React, { useState } from 'react';
import { Menu, X, Github, Linkedin } from 'lucide-react';
import { PROFILE } from '../constants/data';
import useScroll from '../hooks/useScroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const isScrolled = useScroll(20);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-md shadow-lg py-4' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:scale-105 transition-transform">
          {PROFILE.name.split(' ')[0]}<span className="text-white">.</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="text-gray-300 hover:text-blue-400 transition-colors text-sm font-medium tracking-wide">
              {link.name}
            </a>
          ))}
          <div className="flex items-center space-x-4 ml-4 border-l border-gray-700 pl-4">
            <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Github size={18} /></a>
            <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors"><Linkedin size={18} /></a>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-300 hover:text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-lg border-t border-gray-800 p-6 flex flex-col space-y-4 shadow-xl">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-gray-300 hover:text-blue-400 text-lg font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="flex space-x-6 pt-4 border-t border-gray-800 mt-2">
             <a href={PROFILE.social.github} className="text-gray-400 hover:text-white"><Github size={20} /></a>
             <a href={PROFILE.social.linkedin} className="text-gray-400 hover:text-white"><Linkedin size={20} /></a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
