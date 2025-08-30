import React, { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import ATSScore from "../components/ATSScore";
import Suggestions from "../components/Suggestions";
import Navbar from "../components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Home() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // Show toast on successful analysis
  React.useEffect(() => {
    if (analysisResult && !isLoading) {
      toast.success("Resume analyzed successfully!");
    }
  }, [analysisResult, isLoading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-white to-blue-50">
      <ToastContainer position="top-center" autoClose={2500} />
      {/* <Navbar /> */}
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 mb-4 drop-shadow-lg">
              AI Resume Analyzer
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
              Upload your resume and get an instant, brutally honest, AI-powered analysis with actionable suggestions to boost your job search.
            </p>
          </div>

          {/* Upload Section */}
          <div className="card bg-white/90 p-10 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-blue-200 transition-shadow duration-300">
            <ResumeUpload setResults={setAnalysisResult} setIsLoading={setIsLoading} />
          </div>

          {/* Loader */}
          {isLoading && (
            <div className="text-center my-12">
              <p className="text-lg text-blue-700 font-semibold animate-pulse">Analyzing your resume... This might take a moment.</p>
              <div className="flex justify-center mt-6">
                <span className="inline-block w-16 h-16 border-4 border-blue-300 border-t-blue-600 rounded-full animate-spin"></span>
              </div>
            </div>
          )}

          {/* Results */}
          {analysisResult && !isLoading && (
            <div className="mt-14 grid gap-10">
              <ATSScore score={analysisResult.score} />
              <Suggestions suggestions={analysisResult.suggestions} />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default Home;