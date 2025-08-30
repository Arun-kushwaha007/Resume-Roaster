import { useState } from "react";
import axios from "axios";

function ResumeUpload({ setResults, setIsLoading }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    setIsLoading(true);
    setResults(null);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResults(res.data);
    } catch (err) {
      console.error("Error analyzing resume:", err);
      alert("Error analyzing resume. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      <label
        htmlFor="resume-upload"
        className="w-full max-w-lg flex flex-col items-center px-6 py-8 bg-white/90 text-blue-600 rounded-2xl shadow-xl tracking-wide uppercase border-2 border-dashed border-blue-400 cursor-pointer hover:bg-blue-600 hover:text-white transition-all duration-300 group"
      >
        <svg
          className="w-12 h-12 mb-2 text-blue-400 group-hover:text-white transition-colors duration-300"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4 4-4-4h3V3h2v8z" />
        </svg>
        <span className="mt-2 text-lg font-semibold leading-normal text-center">
          {file ? file.name : "Click or drag your resume here"}
        </span>
        <span className="text-xs text-gray-400 mt-1">PDF or DOCX only, max 5MB</span>
        <input
          id="resume-upload"
          type="file"
          accept=".pdf,.docx"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>
      <button
        onClick={handleUpload}
        className="mt-8 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold px-10 py-3 rounded-full shadow-lg hover:from-blue-700 hover:to-cyan-500 hover:scale-105 transition-all duration-300"
      >
        Analyze Resume
      </button>
    </div>
  );
}
export default ResumeUpload;