import React from "react";

const Results = () => {
  const results = [
    { section: "Education", status: "Good" },
    { section: "Experience", status: "Needs Improvement" },
    { section: "Skills", status: "Strong" },
  ];

  return (
    <div className="bg-white p-6 shadow-md rounded-lg" id="results">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Resume Breakdown</h2>
      <table className="w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="border border-gray-200 px-4 py-2">Section</th>
            <th className="border border-gray-200 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
          {results.map((res, index) => (
            <tr key={index} className="text-center">
              <td className="border border-gray-200 px-4 py-2">{res.section}</td>
              <td
                className={`border border-gray-200 px-4 py-2 ${
                  res.status === "Good"
                    ? "text-green-600"
                    : res.status === "Strong"
                    ? "text-blue-600"
                    : "text-red-600"
                }`}
              >
                {res.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Results;
