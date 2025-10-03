import React from "react";
import { Mail, Phone, Linkedin, Github, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center">
        <div className="inline-block mb-4 px-4 py-2 bg-teal-100 rounded-full">
          <span className="text-teal-700 font-semibold text-sm">Available for Opportunities</span>
        </div>
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          Hi, I'm <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Kamankshi Goyal</span>
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-200 mb-8 max-w-3xl mx-auto">
          Computer Science Engineer | Software Developer | Product Enthusiast | ML Innovator
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a href="mailto:goyalkamankshi@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-all transform hover:scale-105">
            <Mail className="w-5 h-5" /> Email Me
          </a>
          <a href="/Kamankshi_Goyal_Resume.pdf" download className="flex items-center gap-2 px-6 py-3 border-2 border-teal-600 text-teal-600 dark:text-teal-400 rounded-lg hover:bg-teal-50 dark:hover:bg-gray-800 transition-all">
            <Download className="w-5 h-5" /> Download Resume
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="tel:+919876667325" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
            <Phone className="w-5 h-5" /> <span className="text-sm sm:text-base">+91-9876667325</span>
          </a>
          <a href="https://linkedin.com/in/kamankshi-goyal-422824253" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
            <Linkedin className="w-5 h-5" /> <span className="text-sm sm:text-base">LinkedIn</span>
          </a>
          <a href="https://github.com/Kamankshi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-teal-600 transition-colors">
            <Github className="w-5 h-5" /> <span className="text-sm sm:text-base">GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}