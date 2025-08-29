import React from "react";

const ATSScore = () => {
  // Dummy score
  const score = 75;

  return (
    <div className="bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-lg font-bold mb-4 text-gray-800">ATS Compatibility Score</h2>
      <div className="flex flex-col items-center">
        <div className="w-32 h-32 flex items-center justify-center rounded-full border-8 border-blue-600 text-3xl font-bold text-blue-600">
          {score}%
        </div>
        <p className="mt-4 text-gray-600">Your resume is {score}% ATS friendly.</p>
      </div>
    </div>
  );
};

export default ATSScore;
