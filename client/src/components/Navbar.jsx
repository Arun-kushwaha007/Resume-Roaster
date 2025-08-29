import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <img src="/icon.svg" alt="Logo" className="w-8 h-8" />
        <span className="font-bold text-lg text-gray-800">Resume Roster</span>
      </div>
      <div className="space-x-6">
        <a href="/" className="text-gray-600 hover:text-gray-900">Home</a>
        <a href="#results" className="text-gray-600 hover:text-gray-900">Results</a>
        <a href="#suggestions" className="text-gray-600 hover:text-gray-900">Suggestions</a>
      </div>
    </nav>
  );
};

export default Navbar;
