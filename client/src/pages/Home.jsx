// client/src/pages/Home.jsx
import { useState } from "react";
import ResumeUpload from "../components/ResumeUpload";
import ATSScore from "../components/ATSScore";
import Suggestions from "../components/Suggestions";
import Navbar from "../components/Navbar";

function Home() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* <Navbar /> */}
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-2">
              AI Resume Analyzer
            </h1>
            <p className="text-lg text-gray-600">
              Get an instant, brutally honest analysis of your resume.
            </p>
          </div>

          {/* Upload Section */}
          <div className="card bg-white p-8 rounded-2xl shadow-lg border border-gray-200">
            <ResumeUpload setResults={setAnalysisResult} setIsLoading={setIsLoading} />
          </div>

          {isLoading && (
            <div className="text-center my-8">
              <p className="text-lg text-gray-600">Analyzing your resume... This might take a moment.</p>
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 h-24 w-24 mx-auto mt-4"></div>
            </div>
          )}

          {analysisResult && !isLoading && (
            <div className="mt-12 grid gap-8">
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
