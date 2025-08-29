// client/src/pages/Home.jsx
import { useState } from "react";
import axios from "axios";

import ResumeUpload from "../components/ResumeUpload";
import ATSScore from "../components/ATSScore";
import Suggestions from "../components/Suggestions";
import Results from "../components/Results";

function Home() {
  const [results, setResults] = useState(null);
  const [roast, setRoast] = useState("");
  const [fixed, setFixed] = useState("");

  const handleRoast = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/analyze/roast", {
        text: results.rawText, // backend should send rawText along with score/suggestions
      });
      setRoast(res.data.roast);
    } catch (err) {
      console.error("Error roasting resume:", err);
    }
  };

  const handleFix = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/analyze/fix", {
        text: results.rawText,
      });
      setFixed(res.data.fixed);
    } catch (err) {
      console.error("Error fixing resume:", err);
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center my-6">
        ATS Resume Analyzer
      </h1>

      {/* Upload Section */}
      <ResumeUpload setResults={setResults} />

      {results && (
        <div className="mt-8 grid gap-6">
          {/* ATS Score + Results + Suggestions */}
          <ATSScore score={results.score} />
          <Results results={results} />
          <Suggestions suggestions={results.suggestions} />

          {/* Roast & Fix Buttons */}
          <div className="mt-8 flex gap-4 justify-center">
            <button
              onClick={handleRoast}
              className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow"
            >
              Roast Me 🔥
            </button>
            <button
              onClick={handleFix}
              className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg shadow"
            >
              Fix My Resume ✨
            </button>
          </div>

          {/* Roast Result */}
          {roast && (
            <div className="mt-6 p-4 bg-red-100 border border-red-300 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Roast 🔥</h3>
              <p>{roast}</p>
            </div>
          )}

          {/* Fixed Resume */}
          {fixed && (
            <div className="mt-6 p-4 bg-green-100 border border-green-300 rounded-lg">
              <h3 className="font-bold text-lg mb-2">Improved Resume ✨</h3>
              <pre className="whitespace-pre-wrap">{fixed}</pre>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Home;
