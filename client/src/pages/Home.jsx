import ResumeUpload from "../components/ResumeUpload";
import ATSScore from "../components/ATSScore";
import Suggestions from "../components/Suggestions";
import Results from "../components/Results";
import { useState } from "react";

function Home() {
  const [results, setResults] = useState(null);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center my-6">ATS Resume Analyzer</h1>
      <ResumeUpload setResults={setResults} />
      {results && (
        <div className="mt-8 grid gap-6">
          <ATSScore score={results.score} />
          <Results results={results} />
          <Suggestions suggestions={results.suggestions} />
        </div>
      )}
    </div>
  );
}
export default Home;
