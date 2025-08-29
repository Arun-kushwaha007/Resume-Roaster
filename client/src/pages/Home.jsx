import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ResumeUpload from "../components/ResumeUpload";
import ATSScore from "../components/ATSScore";
import Suggestions from "../components/Suggestions";
import Results from "../components/Results";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Home = () => {
  const [results, setResults] = useState(null);

  // Example: show a toast when results are updated
  React.useEffect(() => {
    if (results) {
      toast.success("Resume analyzed successfully!");
    }
  }, [results]);

  return (
    <div className="min-h-screen bg-gray-50">
      <ToastContainer />
      {/* Navbar */}
      {/* <Navbar /> */}

      {/* Hero Section */}
      <section className="text-center py-12 px-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          AI-Powered Resume Roster
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Upload your resume, get instant ATS analysis, and receive actionable suggestions to
          optimize your job applications.
        </p>
      </section>

      {/* Upload Section */}
      <section className="py-8 px-6 flex justify-center">
        <ResumeUpload setResults={setResults} />
      </section>

      {/* Results & Suggestions */}
      {results && (
        <section className="grid md:grid-cols-2 gap-8 px-6 py-10 max-w-6xl mx-auto">
          <ATSScore score={results.score} />
          <Suggestions suggestions={results.suggestions} />
        </section>
      )}

      {/* Results Section */}
      {results && (
        <section className="px-6 py-10 max-w-5xl mx-auto">
          <Results results={results} />
        </section>
      )}
    </div>
  );
};

export default Home;