function HowItWorks() {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700 sm:text-5xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">
            Get your resume reviewed in 3 simple steps.
          </p>
        </div>
        <div className="mt-14">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
            {/* Step 1 */}
            <div className="text-center relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700 p-8 hover:shadow-blue-100 dark:hover:shadow-cyan-900 transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 mx-auto text-white bg-indigo-500 rounded-full shadow-lg absolute -top-7 left-1/2 -translate-x-1/2">
                <span className="text-3xl font-bold">1</span>
              </div>
              <h3 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">Upload Your Resume</h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                Upload your resume in PDF or DOCX format. Your data is secure and private.
              </p>
            </div>
            {/* Step 2 */}
            <div className="text-center relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700 p-8 hover:shadow-blue-100 dark:hover:shadow-cyan-900 transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 mx-auto text-white bg-indigo-500 rounded-full shadow-lg absolute -top-7 left-1/2 -translate-x-1/2">
                <span className="text-3xl font-bold">2</span>
              </div>
              <h3 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">Get Instant Feedback</h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                Our AI analyzes your resume and provides instant, actionable feedback and ATS score.
              </p>
            </div>
            {/* Step 3 */}
            <div className="text-center relative bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-blue-100 dark:border-gray-700 p-8 hover:shadow-blue-100 dark:hover:shadow-cyan-900 transition-shadow">
              <div className="flex items-center justify-center w-14 h-14 mx-auto text-white bg-indigo-500 rounded-full shadow-lg absolute -top-7 left-1/2 -translate-x-1/2">
                <span className="text-3xl font-bold">3</span>
              </div>
              <h3 className="mt-10 text-xl font-semibold text-gray-900 dark:text-white">Improve Your Resume</h3>
              <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
                Use the suggestions to enhance your resume and boost your chances of landing your dream job.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-2">Fast, Private, and Effective</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            Resume Roster is designed for job seekers who want results. Your resume never leaves our secure servers, and you get feedback in seconds—no signup required for basic analysis!
          </p>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;