// client/src/pages/Home.jsx
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ResumeUpload from "../components/ResumeUpload";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";

function Home() {
  const [analysisResult, setAnalysisResult] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (analysisResult && file) {
      navigate("/visualizer", { state: { file, analysisResult } });
    }
  }, [analysisResult, file, navigate]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 dark:text-white mb-2">
              Supercharge Your Resume with AI
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Our AI-powered resume analyzer gives you the feedback you need to land your dream job. Get an instant, brutally honest analysis of your resume, including an ATS score and actionable suggestions.
            </p>
          </div>

          {/* Upload Section */}
          <div className="card bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700">
            <ResumeUpload
              setResults={setAnalysisResult}
              setIsLoading={setIsLoading}
              setFile={setFile}
            />
          </div>

          {isLoading && (
            <div className="text-center my-8">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                Analyzing your resume... This might take a moment.
              </p>
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-gray-200 dark:border-gray-700 h-24 w-24 mx-auto mt-4"></div>
            </div>
          )}
        </div>
      </main>
      <Features />
      <HowItWorks />
      <Testimonials />
    </div>
  );
}

export default Home;
