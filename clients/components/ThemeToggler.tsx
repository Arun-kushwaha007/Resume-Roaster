"use client";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const ThemeToggler: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const handleToggle = () => {
    if (!document.startViewTransition) {
      toggleTheme();
      return;
    }
    document.startViewTransition(toggleTheme);
  };

  return (
    <button onClick={handleToggle} aria-label="Toggle Dark Mode" className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors shadow">
      {theme === "dark" ? (
        <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
        </svg>
      ) : (
        <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
          <path d="M21 12.8A9 9 0 1111.2 3a7 7 0 109.8 9.8z" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggler;
