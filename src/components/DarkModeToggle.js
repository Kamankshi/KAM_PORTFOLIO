import React, { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <button
      className="fixed bottom-6 right-6 z-50 rounded-full p-3 bg-teal-600 hover:bg-teal-700 text-white shadow-lg transition"
      aria-label={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setDark(!dark)}
    >
      {dark ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
    </button>
  );
}