function ATSScore({ score }) {
  const circumference = 2 * Math.PI * 54;
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = () => {
    if (score >= 80) return "text-green-500 stroke-green-500";
    if (score >= 50) return "text-yellow-500 stroke-yellow-500";
    return "text-red-500 stroke-red-500";
  };

  return (
    <div className="card bg-gradient-to-br from-white via-blue-50 to-cyan-50 p-8 rounded-3xl shadow-2xl border border-blue-100 hover:shadow-blue-200 transition-shadow duration-300">
      <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 mb-6 drop-shadow-lg tracking-tight">
        Your ATS Score
      </h2>
      <div className="flex items-center justify-center">
        <svg className="w-40 h-40" viewBox="0 0 120 120">
          <circle
            className="text-gray-200"
            strokeWidth="12"
            stroke="currentColor"
            fill="transparent"
            r="54"
            cx="60"
            cy="60"
          />
          <circle
            className={getScoreColor()}
            strokeWidth="12"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            stroke="currentColor"
            fill="transparent"
            r="54"
            cx="60"
            cy="60"
            style={{ transition: 'stroke-dashoffset 0.7s cubic-bezier(.4,2,.6,1)' }}
          />
          <text
            x="60"
            y="60"
            className={`text-4xl font-extrabold ${getScoreColor()} drop-shadow`}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {score}
          </text>
        </svg>
      </div>
      <p className="text-center text-gray-600 mt-6 text-lg font-medium">
        This score estimates your resume's compatibility with Applicant Tracking Systems.
      </p>
    </div>
  );
}

export default ATSScore;