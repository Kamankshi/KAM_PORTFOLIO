import React from "react";
import { FileText } from "lucide-react";

export default function SavePDFButton() {
  const handleSavePDF = () => {
    import("html2pdf.js").then(html2pdf => {
      const element = document.body; // or a specific div, e.g. document.getElementById("portfolio-root")
      const opt = {
        margin:       0,
        filename:     'Kamankshi_Goyal_Portfolio.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
      html2pdf.default().set(opt).from(element).save();
    });
  };

  return (
    <button
      className="fixed bottom-6 left-6 z-50 rounded-full p-3 bg-blue-600 hover:bg-blue-700 text-white shadow-lg transition flex items-center gap-2"
      aria-label="Save Portfolio as PDF"
      onClick={handleSavePDF}
    >
      <FileText className="w-5 h-5" /> Save PDF
    </button>
  );
}