import React from "react";

function Results({ data }) {
  if (!data) return null;

  return (
    <div className="mt-4 p-4 border rounded-lg shadow-md bg-gray-50">
      <h2 className="text-xl font-bold mb-2">Analysis Results</h2>
      <p><strong>ATS Score:</strong> {data.atsScore}%</p>
      <h3 className="mt-2 font-semibold">Suggestions:</h3>
      <ul className="list-disc list-inside">
        {data.suggestions.map((s, i) => (
          <li key={i}>{s}</li>
        ))}
      </ul>
    </div>
  );
}

export default Results;
