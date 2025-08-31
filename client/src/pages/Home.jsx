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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <main className="container mx-auto p-4 md:p-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700 mb-2">
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
              <div className="loader ease-linear rounded-full border-8 border-t-8 border-blue-200 dark:border-cyan-700 h-24 w-24 mx-auto mt-4 animate-spin"></div>
            </div>
          )}
        </div>
      </main>
      <Features />
      <HowItWorks />
      {/* <Testimonials /> */}
      <section className="max-w-4xl mx-auto mt-16 mb-8 px-4">
        <div className="bg-blue-50 dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700 p-8 text-center">
          <h2 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-2">Why Resume Roster?</h2>
          <p className="text-gray-700 dark:text-gray-300 text-lg mb-2">
            Fast, private, and brutally honest. Your resume never leaves our secure servers, and you get actionable feedback in seconds.
          </p>
          <ul className="flex flex-wrap justify-center gap-4 mt-4 text-base">
            <li className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-blue-200 dark:border-cyan-700 text-blue-700 dark:text-cyan-300 font-semibold shadow">
              No signup required for basic analysis
            </li>
            <li className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-blue-200 dark:border-cyan-700 text-blue-700 dark:text-cyan-300 font-semibold shadow">
              ATS & recruiter friendly
            </li>
            <li className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-blue-200 dark:border-cyan-700 text-blue-700 dark:text-cyan-300 font-semibold shadow">
              AI-powered suggestions
            </li>
            <li className="px-4 py-2 bg-white dark:bg-gray-900 rounded-full border border-blue-200 dark:border-cyan-700 text-blue-700 dark:text-cyan-300 font-semibold shadow">
              Privacy-first design
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default Home;