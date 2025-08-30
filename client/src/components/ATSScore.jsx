function ATSScore({ score }) {
  const circumference = 2 * Math.PI * 54; // 2 * pi * radius
  const offset = circumference - (score / 100) * circumference;

  const getScoreColor = () => {
    if (score >= 80) return "text-green-500";
    if (score >= 50) return "text-yellow-500";
    return "text-red-500";
  };

  return (
    <div className="card bg-white p-6 rounded-2xl shadow-lg border border-gray-200">
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-4">
        Your ATS Score
      </h2>
      <div className="flex items-center justify-center">
        <svg className="w-36 h-36" viewBox="0 0 120 120">
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
            style={{ transition: 'stroke-dashoffset 0.5s ease-in-out' }}
          />
          <text
            x="60"
            y="60"
            className={`text-3xl font-bold ${getScoreColor()}`}
            textAnchor="middle"
            dominantBaseline="middle"
          >
            {score}
          </text>
        </svg>
      </div>
      <p className="text-center text-gray-600 mt-4">
        This score estimates your resume's compatibility with Applicant Tracking Systems.
      </p>
    </div>
  );
}

export default ATSScore;
