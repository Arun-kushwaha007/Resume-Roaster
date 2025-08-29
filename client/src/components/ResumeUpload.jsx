import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function ResumeUpload({ onResult }) {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please upload a resume first!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      setLoading(true);
      const res = await axios.post("http://localhost:5000/api/resume/analyze", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      onResult(res.data); // send results to parent
      toast.success("Resume analyzed successfully!");
    } catch (err) {
      console.error(err);
      toast.error("Error analyzing resume!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-md w-full max-w-md bg-white">
      <h2 className="text-xl font-bold mb-2">Upload Resume</h2>
      <input type="file" accept=".pdf,.doc,.docx" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={loading}
        className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        {loading ? "Analyzing..." : "Upload & Analyze"}
      </button>
    </div>
  );
}

export default ResumeUpload;
