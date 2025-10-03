import React from "react";
import { Briefcase, ChevronRight } from "lucide-react";

const experiences = [
  {
    role: 'Launchpad Trainee',
    company: 'PwC India',
    period: 'Feb 2025 - Jul 2025',
    location: 'Remote',
    highlights: [
      'Trained in IT fundamentals, RDBMS programming, and enterprise business tools',
      'Utilized agile principles to simulate project workflows'
    ]
  },
  {
    role: 'Frontend Developer Intern',
    company: 'Foundr Flow',
    period: 'Sep 2024 - Feb 2025',
    location: 'Remote',
    highlights: [
      'Developed responsive web interfaces and collaborated with cross-functional teams',
      'Delivered scalable internal solutions for startup ecosystem partners'
    ]
  },
  {
    role: 'Machine Learning Intern',
    company: 'NDVTechsys Solutions LLP',
    period: 'May 2025 - Jul 2025',
    location: 'Remote',
    highlights: [
      'Developed ML models using real-world datasets with 92%+ accuracy',
      'Optimized data pipelines with feature engineering and statistical analysis'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Professional Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="space-y-8">
          {experiences.map((exp, idx) => (
            <div key={idx} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-800">
              <div className="flex flex-wrap items-start justify-between mb-4 gap-4">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-teal-100 dark:bg-gray-800 rounded-lg">
                    <Briefcase className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">{exp.role}</h3>
                    <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold">{exp.company}</p>
                    <p className="text-sm text-gray-500">{exp.location}</p>
                  </div>
                </div>
                <span className="text-sm font-semibold text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800 px-4 py-2 rounded-full">
                  {exp.period}
                </span>
              </div>
              <ul className="space-y-2 md:ml-16">
                {exp.highlights.map((highlight, hIdx) => (
                  <li key={hIdx} className="flex items-start gap-2 text-gray-700 dark:text-gray-200">
                    <ChevronRight className="w-5 h-5 text-teal-600 dark:text-teal-400 flex-shrink-0 mt-0.5" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}