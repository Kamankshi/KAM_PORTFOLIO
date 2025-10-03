import React from "react";
import { Code } from "lucide-react";

const skills = {
  languages: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'SQL', 'HTML/CSS'],
  frameworks: ['React.js', 'Node.js', 'Flask', 'Express.js', 'Scikit-learn', 'Pandas', 'NumPy'],
  databases: ['MySQL', 'MongoDB', 'Firebase'],
  cloud: ['AWS', 'Microsoft Azure', 'Power BI'],
  core: ['DSA', 'OOPs', 'DBMS', 'Computer Networks', 'API Development', 'Agile', 'Machine Learning']
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-800 hover:shadow-lg transition-shadow">
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 capitalize flex items-center gap-2">
                <Code className="w-5 h-5 text-teal-600 dark:text-teal-400" /> {category}
              </h4>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span key={idx} className="px-3 py-1 bg-teal-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm text-gray-700 dark:text-gray-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}