import React, { useState } from "react";
import ResumeUpload from "./components/ResumeUpload";
import Results from "./components/Results";
import { ToastContainer } from "react-toastify";

function App() {
  const [analysis, setAnalysis] = useState(null);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">AI-Powered Resume Roster</h1>
      <ResumeUpload onResult={setAnalysis} />
      <Results data={analysis} />
      <ToastContainer />
    </div>
  );
}

export default App;
