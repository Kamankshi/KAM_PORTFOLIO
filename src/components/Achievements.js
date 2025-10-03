import React from "react";
import { Star, Award, Sparkles } from "lucide-react";

const achievements = [
  { icon: Star, text: 'Top 60 Scholar - NXP Women in Tech 2023', subtext: '8,500+ applicants' },
  { icon: Award, text: 'Winner - Techathon 2025', subtext: '90+ teams' },
  { icon: Sparkles, text: 'Finalist - Smart India Hackathon', subtext: '2x Finalist' },
  { icon: Award, text: 'Microsoft Azure Fundamentals', subtext: 'Certified' },
  { icon: Award, text: 'AWS Academy Certified', subtext: 'Cloud Foundations & Data Engineering' },
  { icon: Award, text: 'Cisco Cybersecurity Certification', subtext: 'Verified' }
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Achievements & Certifications</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-600 to-blue-600 mx-auto"></div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map((achievement, idx) => {
            const Icon = achievement.icon;
            return (
              <div key={idx} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100 dark:border-gray-800 hover:-translate-y-1">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-teal-100 to-blue-100 dark:from-teal-900 dark:to-blue-900 rounded-lg">
                    <Icon className="w-6 h-6 text-teal-600 dark:text-teal-400" />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-1">{achievement.text}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.subtext}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="mt-12 bg-gradient-to-r from-teal-600 to-blue-600 rounded-2xl p-8 text-white text-center">
          <h3 className="text-2xl font-bold mb-2">SheFi Women in Tech</h3>
          <p className="text-lg">Cohort 13 Member & Chandigarh Lead</p>
        </div>
      </div>
    </section>
  );
}