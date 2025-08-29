import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

function ResumeUpload({ setResults }) {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => setFile(e.target.files[0]);

  const handleUpload = async () => {
    if (!file) {
      toast.error("Please upload a resume file!");
      return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      setResults(res.data);
      toast.success("Resume analyzed!");
    } catch (err) {
      toast.error("Error analyzing resume!");
    }
  };

  return (
    <div className="text-center">
      <input type="file" accept=".pdf,.docx" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        className="bg-blue-600 text-white px-4 py-2 rounded ml-4 hover:bg-blue-700"
      >
        Upload & Analyze
      </button>
    </div>
  );
}
export default ResumeUpload;
