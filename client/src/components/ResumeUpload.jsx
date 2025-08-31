import { useState } from "react";
import axios from "axios";

function ResumeUpload({ setResults, setIsLoading, setFile: setFileProp }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    setFileProp(selectedFile);
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
    <div className="flex flex-col items-center justify-center">
      <label
        htmlFor="resume-upload"
        className="w-full max-w-md flex flex-col items-center px-4 py-6 bg-white dark:bg-gray-800 text-blue-500 dark:text-blue-400 rounded-lg shadow-lg tracking-wide uppercase border border-blue-500 dark:border-blue-400 cursor-pointer hover:bg-blue-500 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-colors duration-300"
      >
        <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4 4-4-4h3V3h2v8z" />
        </svg>
        <span className="mt-2 text-base leading-normal">
          {file ? file.name : "Select your resume"}
        </span>
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
        className="mt-6 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold px-8 py-3 rounded-lg shadow-md hover:from-blue-700 hover:to-cyan-500 dark:bg-indigo-500 dark:hover:bg-indigo-600 transition-all duration-300"
      >
        Analyze Resume
      </button>
      <p className="mt-4 text-sm text-gray-500 dark:text-gray-400 text-center max-w-md">
        Supported formats: <span className="font-semibold text-blue-700 dark:text-cyan-300">PDF, DOCX</span>. Your file is processed securely and never stored.
      </p>
      <p className="mt-1 text-xs text-gray-400 dark:text-gray-500 text-center max-w-md">
        Need help? <a href="/contact" className="underline hover:text-blue-600 dark:hover:text-cyan-400">Contact support</a>
      </p>
    </div>
  );
}
export default ResumeUpload;