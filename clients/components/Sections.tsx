"use client";
import React from "react";
import { CheckCircleIcon, XCircleIcon } from "@heroicons/react/24/outline";

interface SectionsProps {
  sections: string[];
}

const Sections: React.FC<SectionsProps> = ({ sections }) => {
  const requiredSections = ["Education", "Experience", "Skills", "Projects"];
  const foundSections = sections || [];

  return (
    <div className="card bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-3">Resume Sections</h2>
      <ul className="space-y-2">
        {requiredSections.map((section) => {
          const isFound = foundSections.includes(section);
          return (
            <li key={section} className="flex items-center">
              {isFound ? (
                <CheckCircleIcon className="w-6 h-6 mr-2 text-green-500" />
              ) : (
                <XCircleIcon className="w-6 h-6 mr-2 text-red-500" />
              )}
              <span className={isFound ? "text-gray-700 dark:text-gray-300" : "text-red-500"}>
                {section}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sections;
