import React from "react";

const Suggestions = () => {
  const tips = [
    "Use standard fonts like Arial or Times New Roman.",
    "Avoid graphics and tables, stick to text-based formatting.",
    "Include relevant keywords from job descriptions.",
    "Keep resume concise, ideally 1-2 pages.",
  ];

  return (
    <div className="bg-white p-6 shadow-md rounded-lg" id="suggestions">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Suggestions for Improvement</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-600">
        {tips.map((tip, index) => (
          <li key={index}>{tip}</li>
        ))}
      </ul>
    </div>
  );
};

export default Suggestions;
