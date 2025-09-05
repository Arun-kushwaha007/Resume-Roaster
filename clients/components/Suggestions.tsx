"use client";
import React from "react";
import {
  FireIcon,
  LightBulbIcon,
  WrenchScrewdriverIcon,
  PaintBrushIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";
import { motion as Motion } from "framer-motion";

interface SuggestionsProps {
  suggestions: {
    roast?: string;
    fix?: string;
    general?: string[];
    formatting?: string[];
    bonus?: string[];
  };
}

const Suggestions: React.FC<SuggestionsProps> = ({ suggestions }) => {
  // ✅ Give defaults so they're never undefined
  const { roast, fix, general = [], formatting = [], bonus = [] } = suggestions;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <div className="space-y-10">
      {roast && (
        <Motion.div
          className="card bg-red-50 dark:bg-red-900/20 border-l-8 border-red-500 dark:border-red-400 p-8 rounded-3xl shadow-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-red-800 dark:text-red-300 flex items-center mb-3">
            <FireIcon className="w-7 h-7 mr-2" /> The Roast
          </h2>
          <p className="text-lg">{roast}</p>
        </Motion.div>
      )}

      {fix && (
        <Motion.div
          className="card bg-green-50 dark:bg-green-900/20 border-l-8 border-green-500 dark:border-green-400 p-8 rounded-3xl shadow-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-green-800 dark:text-green-300 flex items-center mb-3">
            <WrenchScrewdriverIcon className="w-7 h-7 mr-2" /> AI Fixes
          </h2>
          <p className="text-lg">{fix}</p>
        </Motion.div>
      )}

      {general.length > 0 && (
        <Motion.div
          className="card bg-yellow-50 dark:bg-yellow-900/20 border-l-8 border-yellow-500 dark:border-yellow-400 p-8 rounded-3xl shadow-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-yellow-800 dark:text-yellow-300 flex items-center mb-3">
            <LightBulbIcon className="w-7 h-7 mr-2" /> General Suggestions
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {general.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Motion.div>
      )}

      {formatting.length > 0 && (
        <Motion.div
          className="card bg-blue-50 dark:bg-blue-900/20 border-l-8 border-blue-500 dark:border-blue-400 p-8 rounded-3xl shadow-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-blue-800 dark:text-blue-300 flex items-center mb-3">
            <PaintBrushIcon className="w-7 h-7 mr-2" /> Formatting
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {formatting.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Motion.div>
      )}

      {bonus.length > 0 && (
        <Motion.div
          className="card bg-cyan-50 dark:bg-cyan-900/20 border-l-8 border-cyan-500 dark:border-cyan-400 p-8 rounded-3xl shadow-2xl"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-cyan-800 dark:text-cyan-300 flex items-center mb-3">
            <SparklesIcon className="w-7 h-7 mr-2" /> Bonus Tips
          </h2>
          <ul className="list-disc list-inside space-y-2">
            {bonus.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </Motion.div>
      )}
    </div>
  );
};

export default Suggestions;
