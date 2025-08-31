import { FireIcon, LightBulbIcon, WrenchScrewdriverIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import { motion as Motion } from 'framer-motion';

function Suggestions({ suggestions }) {
  const { roast, fix, general, formatting } = suggestions;

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div className="space-y-8">
      {/* Roast Section */}
      {roast && (
        <Motion.div
          className="card bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 dark:border-red-400 p-6 rounded-2xl shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-red-800 dark:text-red-300 flex items-center mb-3">
            <FireIcon className="w-7 h-7 mr-2" />
            The Roast
          </h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap font-medium">{roast}</p>
        </Motion.div>
      )}

      {/* AI Fixes Section */}
      {fix && (
        <Motion.div
          className="card bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 dark:border-green-400 p-6 rounded-2xl shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-green-800 dark:text-green-300 flex items-center mb-3">
            <WrenchScrewdriverIcon className="w-7 h-7 mr-2" />
            AI-Generated Improvements
          </h2>
          <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">{fix}</p>
        </Motion.div>
      )}

      {/* General Suggestions Section */}
      {general && general.length > 0 && (
        <Motion.div
          className="card bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 dark:border-yellow-400 p-6 rounded-2xl shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-yellow-800 dark:text-yellow-300 flex items-center mb-3">
            <LightBulbIcon className="w-7 h-7 mr-2" />
            General Suggestions
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {general.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Motion.div>
      )}
      
      {/* Formatting Suggestions Section */}
      {formatting && formatting.length > 0 && (
        <Motion.div
          className="card bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 dark:border-blue-400 p-6 rounded-2xl shadow-lg"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          <h2 className="text-2xl font-bold text-blue-800 dark:text-blue-300 flex items-center mb-3">
            <PaintBrushIcon className="w-7 h-7 mr-2" />
            Formatting Feedback
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {formatting.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </Motion.div>
      )}
    </div>
  );
}

export default Suggestions;
