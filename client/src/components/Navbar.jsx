import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center space-x-3">
        <img src="/icon.svg" alt="Logo" className="w-10 h-10 drop-shadow-md" />
        <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 tracking-tight drop-shadow">
          Resume Roster
        </span>
      </div>
      <div className="space-x-8 flex items-center">
        <a
          href="/"
          className="text-gray-700 font-medium hover:text-blue-700 transition-colors duration-200"
        >
          Home
        </a>
        <a
          href="#results"
          className="text-gray-700 font-medium hover:text-blue-700 transition-colors duration-200"
        >
          Results
        </a>
        <a
          href="#suggestions"
          className="text-gray-700 font-medium hover:text-blue-700 transition-colors duration-200"
        >
          Suggestions
        </a>
        <a
          href="https://github.com/Arun-kushwaha007/Resume-Roaster.git"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-4 px-4 py-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-semibold shadow hover:from-blue-700 hover:to-cyan-500 transition-all duration-200"
        >
          GitHub
        </a>
      </div>
    </nav>
  );
};

export default Navbar;