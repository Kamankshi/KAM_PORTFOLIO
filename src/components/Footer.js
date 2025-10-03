import React from "react";
import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <p className="text-gray-400 mb-4">
          © 2025 Kamankshi Goyal. Built with passion and React.js
        </p>
        <div className="flex justify-center gap-6">
          <a href="https://linkedin.com/in/kamankshi-goyal-422824253" className="hover:text-teal-400 transition-colors">
            <Linkedin className="w-5 h-5 inline-block mr-1" /> LinkedIn
          </a>
          <a href="https://github.com/Kamankshi" className="hover:text-teal-400 transition-colors">
            <Github className="w-5 h-5 inline-block mr-1" /> GitHub
          </a>
          <a href="mailto:kamankshi555goyal@gmail.com" className="hover:text-teal-400 transition-colors">
            <Mail className="w-5 h-5 inline-block mr-1" /> Email
          </a>
        </div>
      </div>
    </footer>
  );
}