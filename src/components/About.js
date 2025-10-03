import React from "react";
import { GraduationCap, Code } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
              I'm a detail-oriented, results-driven Computer Science Engineer passionate about software development, full-stack engineering, product management, and data-driven solutions. I excel in building scalable applications, optimizing machine learning pipelines, and driving impact through technology. <br />
              <span className="text-teal-600 dark:text-teal-400 font-semibold">ATS Keywords:</span> software developer, machine learning, full-stack, cloud, API development, agile, React, Python, AWS, SQL.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold">NXP Women in Tech Scholar</span>
              <span className="px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">Techathon 2025 Winner</span>
              <span className="px-4 py-2 bg-purple-100 text-purple-700 rounded-full text-sm font-semibold">SIH Finalist (2x)</span>
            </div>
          </div>
          <div>
            <div className="bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-8 h-8 text-teal-600 dark:text-teal-400" />
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Education</h3>
              </div>
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">B.Tech, Computer Science</h4>
                  <p className="text-gray-600 dark:text-gray-200 mb-1">Chandigarh Engineering College</p>
                  <p className="text-sm text-gray-500">2022 - 2026 | CGPA: 9.0/10</p>
                </div>
                <div className="border-t pt-4">
                  <h4 className="font-bold text-gray-900 dark:text-white mb-1">Senior Secondary (CBSE)</h4>
                  <p className="text-gray-600 dark:text-gray-200 mb-1">Kendriya Vidyalaya</p>
                  <p className="text-sm text-gray-500">2022 | 95.5%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}