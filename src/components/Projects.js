import React from "react";
import { ChevronRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: 'HealSync - AI Healthcare Platform',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'ML'],
    description: 'Full-stack healthcare system with real-time AI diagnostics and personalized fitness recommendations',
    highlights: [
      'Engineered end-to-end product lifecycle with user research',
      'Implemented RESTful APIs for authentication',
      'Integrated ML models for health recommendations'
    ],
    github: "https://github.com/Kamankshi/HealSync",
    color: 'from-emerald-400 to-teal-500'
  },
  {
    title: 'Laptop Price Prediction System',
    tech: ['Python', 'Flask', 'Scikit-learn', 'Pandas', 'NumPy'],
    description: 'Machine learning model achieving 92% accuracy for real-time price predictions',
    highlights: [
      'Applied feature engineering for data preprocessing',
      'Designed Flask API endpoints for real-time predictions',
      'Created interactive data visualizations'
    ],
    github: "https://github.com/Kamankshi/Laptop-Price-Prediction",
    color: 'from-blue-400 to-indigo-500'
  },
  {
    title: 'E-Waste Management Platform',
    tech: ['JavaScript', 'HTML/CSS', 'Firebase'],
    description: 'Stakeholder portal with real-time analytics and carbon footprint tracking',
    highlights: [
      'Implemented secure authentication with Firebase',
      'Built role-based access control system',
      'Designed scalable architecture for high-volume data'
    ],
    github: "https://github.com/Kamankshi/EWaste-Platform",
    color: 'from-purple-400 to-pink-500'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div key={idx} className="group bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-800">
              <div className={`h-3 bg-gradient-to-r ${project.color}`}></div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-200 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tIdx) => (
                    <span key={tIdx} className="px-3 py-1 bg-teal-50 dark:bg-gray-800 text-teal-700 dark:text-teal-400 rounded-full text-xs font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, hIdx) => (
                    <li key={hIdx} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-200">
                      <ChevronRight className="w-4 h-4 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-teal-600 dark:text-teal-400 font-semibold hover:gap-3 transition-all">
                  View Project <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}