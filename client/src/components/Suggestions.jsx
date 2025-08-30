import { FireIcon, LightBulbIcon, WrenchScrewdriverIcon, PaintBrushIcon } from '@heroicons/react/24/outline';
import { motion } from 'framer-motion';

function Suggestions({ suggestions }) {
  const { roast, fix, general, formatting } = suggestions;

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, type: "spring" } },
  };

  const sectionHeader = (Icon, color, title) => (
    <h2 className={`text-2xl font-bold flex items-center mb-3 ${color}`}>
      <Icon className="w-7 h-7 mr-2 drop-shadow-md" />
      {title}
    </h2>
  );

  return (
    <div className="space-y-10">
      {/* Roast Section */}
      {roast && (
        <motion.div
          className="card bg-gradient-to-r from-red-50 via-white to-red-100 border-l-8 border-red-500 p-8 rounded-3xl shadow-2xl hover:shadow-red-200 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {sectionHeader(FireIcon, "text-red-800", "The Roast")}
          <p className="text-gray-800 whitespace-pre-wrap font-semibold text-lg leading-relaxed tracking-wide">
            {roast}
          </p>
        </motion.div>
      )}

      {/* AI Fixes Section */}
      {fix && (
        <motion.div
          className="card bg-gradient-to-r from-green-50 via-white to-green-100 border-l-8 border-green-500 p-8 rounded-3xl shadow-2xl hover:shadow-green-200 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {sectionHeader(WrenchScrewdriverIcon, "text-green-800", "AI-Generated Improvements")}
          <p className="text-gray-800 whitespace-pre-wrap font-medium text-lg leading-relaxed tracking-wide">
            {fix}
          </p>
        </motion.div>
      )}

      {/* General Suggestions Section */}
      {general && general.length > 0 && (
        <motion.div
          className="card bg-gradient-to-r from-yellow-50 via-white to-yellow-100 border-l-8 border-yellow-500 p-8 rounded-3xl shadow-2xl hover:shadow-yellow-200 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {sectionHeader(LightBulbIcon, "text-yellow-800", "General Suggestions")}
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-base pl-2">
            {general.map((item, index) => (
              <li key={index} className="pl-1">{item}</li>
            ))}
          </ul>
        </motion.div>
      )}

      {/* Formatting Suggestions Section */}
      {formatting && formatting.length > 0 && (
        <motion.div
          className="card bg-gradient-to-r from-blue-50 via-white to-blue-100 border-l-8 border-blue-500 p-8 rounded-3xl shadow-2xl hover:shadow-blue-200 transition-shadow duration-300"
          variants={cardVariants}
          initial="hidden"
          animate="visible"
        >
          {sectionHeader(PaintBrushIcon, "text-blue-800", "Formatting Feedback")}
          <ul className="list-disc list-inside space-y-3 text-gray-800 text-base pl-2">
            {formatting.map((item, index) => (
              <li key={index} className="pl-1">{item}</li>
            ))}
          </ul>
        </motion.div>
      )}
    </div>
  );
}

export default Suggestions;