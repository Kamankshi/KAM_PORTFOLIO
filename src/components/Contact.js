import React, { useState } from "react";
import { Mail, Phone, Linkedin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleFormChange = (field, value) => setFormData({ ...formData, [field]: value });

  const handleSubmit = () => {
    const subject = `Portfolio Contact: ${formData.name}`;
    const body = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0A%0D%0AMessage:%0D%0A${formData.message}`;
    window.location.href = `mailto:kamankshi555goyal@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 to-blue-50 dark:from-gray-950 dark:to-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-6">Let's Connect</h2>
        <p className="text-xl text-gray-600 dark:text-gray-200 mb-12">
          I'm always open to discussing new opportunities, collaborations, or just having a chat about technology!
        </p>
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <a href="mailto:kamankshi555goyal@gmail.com" className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <Mail className="w-8 h-8 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">Email</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 break-all">kamankshi555goyal@gmail.com</p>
          </a>
          <a href="tel:+919876667325" className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <Phone className="w-8 h-8 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">Phone</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">+91-9876667325</p>
          </a>
          <a href="https://linkedin.com/in/kamankshi-goyal-422824253" target="_blank" rel="noopener noreferrer" className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1">
            <Linkedin className="w-8 h-8 text-teal-600 dark:text-teal-400 mx-auto mb-3" />
            <h4 className="font-bold text-gray-900 dark:text-white mb-1">LinkedIn</h4>
            <p className="text-sm text-gray-600 dark:text-gray-300">Connect with me</p>
          </a>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Send me a message</h3>
          <div className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) => handleFormChange('name', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400 bg-gray-50 dark:bg-gray-800"
            />
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) => handleFormChange('email', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400 bg-gray-50 dark:bg-gray-800"
            />
            <textarea
              rows={4}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) => handleFormChange('message', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 dark:focus:ring-teal-400 bg-gray-50 dark:bg-gray-800"
            />
            <button
              onClick={handleSubmit}
              className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all transform hover:scale-105 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" /> Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}