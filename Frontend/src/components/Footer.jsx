import React from 'react';
import { PROFILE } from '../constants/data';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 py-12 border-t border-gray-800">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center bg-gray-900/50 backdrop-blur-sm p-6 rounded-2xl border border-gray-800/50">
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-2">{PROFILE.name}</h2>
          <p className="text-gray-400 text-sm">{PROFILE.headline}</p>
        </div>

        <div className="flex space-x-6 mb-6 md:mb-0">
          {PROFILE.social.github && <a href={PROFILE.social.github} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><Github size={20} /></a>}
          {PROFILE.social.linkedin && <a href={PROFILE.social.linkedin} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><Linkedin size={20} /></a>}
          {PROFILE.social.twitter && <a href={PROFILE.social.twitter} target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400 transition-colors"><Twitter size={20} /></a>}
          <a href={`mailto:${PROFILE.email}`} className="text-gray-400 hover:text-blue-400 transition-colors"><Mail size={20} /></a>
        </div>

        <div className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
