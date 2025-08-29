import React, { useState } from "react";

const ResumeUpload = () => {
  const [file, setFile] = useState(null);

  const handleUpload = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = () => {
    if (!file) {
      alert("Please upload a resume first!");
      return;
    }
    // TODO: Send file to backend API
    console.log("Uploaded file:", file);
  };

  return (
    <div className="bg-white p-6 shadow-md rounded-lg w-full md:w-1/2">
      <h2 className="text-lg font-bold mb-4 text-gray-800">Upload Your Resume</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={handleUpload}
        className="mb-4 block w-full text-gray-700 border border-gray-300 rounded-lg p-2"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-4 py-2 rounded-lg"
      >
        Analyze Resume
      </button>
    </div>
  );
};

export default ResumeUpload;
