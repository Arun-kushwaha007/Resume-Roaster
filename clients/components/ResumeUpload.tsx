"use client";
import React, { useState, ChangeEvent } from "react";
import axios from "axios";

interface ResumeUploadProps {
  setResults: (results: any) => void;
  setIsLoading: (loading: boolean) => void;
  setFile: (file: File | null) => void;
}

const ResumeUpload: React.FC<ResumeUploadProps> = ({ setResults, setIsLoading, setFile: setFileProp }) => {
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
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
      const res = await axios.post("/api/upload", formData, {
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
      <label htmlFor="resume-upload" className="upload-box">
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4 4-4-4h3V3h2v8z" />
        </svg>
        <span className="mt-2 text-base leading-normal">{file ? file.name : "Select your resume"}</span>
        <input id="resume-upload" type="file" accept=".pdf,.docx" onChange={handleFileChange} className="hidden" />
      </label>
      <button onClick={handleUpload} className="btn-primary mt-6">Analyze Resume</button>
    </div>
  );
};

export default ResumeUpload;
