import { FireIcon, LightBulbIcon, WrenchScrewdriverIcon, PaintBrushIcon, SparklesIcon } from '@heroicons/react/24/outline';
import { motion as Motion } from 'framer-motion';

function Suggestions({ suggestions }) {
  const { roast, fix, general, formatting, bonus } = suggestions;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="space-y-10">
      {/* Roast Section */}
      {roast && (
        <Motion.div
          className="card bg-red-50 dark:bg-red-900/20 border-l-8 border-red-500 dark:border-red-400 p-8 rounded-3xl shadow-2xl hover:shadow-red-200 dark:hover:shadow-red-900 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-red-800 dark:text-red-300 flex items-center mb-3 drop-shadow">
            <FireIcon className="w-7 h-7 mr-2" />
            The Roast
          </h2>
          <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-semibold text-lg leading-relaxed tracking-wide">
            {roast}
          </p>
        </Motion.div>
      )}

      {/* AI Fixes Section */}
      {fix && (
        <Motion.div
          className="card bg-green-50 dark:bg-green-900/20 border-l-8 border-green-500 dark:border-green-400 p-8 rounded-3xl shadow-2xl hover:shadow-green-200 dark:hover:shadow-green-900 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-green-800 dark:text-green-300 flex items-center mb-3 drop-shadow">
            <WrenchScrewdriverIcon className="w-7 h-7 mr-2" />
            AI-Generated Improvements
          </h2>
          <p className="text-gray-800 dark:text-gray-200 whitespace-pre-wrap font-medium text-lg leading-relaxed tracking-wide">
            {fix}
          </p>
        </Motion.div>
      )}

      {/* General Suggestions Section */}
      {general && general.length > 0 && (
        <Motion.div
          className="card bg-yellow-50 dark:bg-yellow-900/20 border-l-8 border-yellow-500 dark:border-yellow-400 p-8 rounded-3xl shadow-2xl hover:shadow-yellow-200 dark:hover:shadow-yellow-900 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-yellow-800 dark:text-yellow-300 flex items-center mb-3 drop-shadow">
            <LightBulbIcon className="w-7 h-7 mr-2" />
            General Suggestions
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-200 text-base pl-2">
            {general.map((item, index) => (
              <li key={index} className="pl-1">{item}</li>
            ))}
          </ul>
        </Motion.div>
      )}

      {/* Formatting Suggestions Section */}
      {formatting && formatting.length > 0 && (
        <Motion.div
          className="card bg-blue-50 dark:bg-blue-900/20 border-l-8 border-blue-500 dark:border-blue-400 p-8 rounded-3xl shadow-2xl hover:shadow-blue-200 dark:hover:shadow-blue-900 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-blue-800 dark:text-blue-300 flex items-center mb-3 drop-shadow">
            <PaintBrushIcon className="w-7 h-7 mr-2" />
            Formatting Feedback
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-200 text-base pl-2">
            {formatting.map((item, index) => (
              <li key={index} className="pl-1">{item}</li>
            ))}
          </ul>
        </Motion.div>
      )}

      {/* Bonus/Extra Suggestions Section (optional, for future extensibility) */}
      {bonus && bonus.length > 0 && (
        <Motion.div
          className="card bg-cyan-50 dark:bg-cyan-900/20 border-l-8 border-cyan-500 dark:border-cyan-400 p-8 rounded-3xl shadow-2xl hover:shadow-cyan-200 dark:hover:shadow-cyan-900 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-extrabold text-cyan-800 dark:text-cyan-300 flex items-center mb-3 drop-shadow">
            <SparklesIcon className="w-7 h-7 mr-2" />
            Bonus Tips
          </h2>
          <ul className="list-disc list-inside space-y-3 text-gray-800 dark:text-gray-200 text-base pl-2">
            {bonus.map((item, index) => (
              <li key={index} className="pl-1">{item}</li>
            ))}
          </ul>
        </Motion.div>
      )}
    </div>
  );
}

export default Suggestions;