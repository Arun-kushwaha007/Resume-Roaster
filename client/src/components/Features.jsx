function Features() {
  return (
    <div className="py-16 bg-gradient-to-br from-blue-50 via-white to-cyan-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="max-w-5xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700 sm:text-5xl">
            Features
          </h2>
          <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
            Everything you need to create a job-winning resume, powered by AI.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-12 md:gap-y-12">
            {/* ATS Score */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-100 dark:border-gray-700 hover:shadow-blue-100 dark:hover:shadow-cyan-900 transition-shadow">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md -top-6 left-6 shadow-lg">
                  {/* Heroicon: globe-alt */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-semibold leading-6 text-gray-900 dark:text-white">ATS Score</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                Get an instant analysis of your resume's ATS-friendliness and see how it stacks up against other resumes.
              </dd>
            </div>
            {/* AI Suggestions */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-100 dark:border-gray-700 hover:shadow-blue-100 dark:hover:shadow-cyan-900 transition-shadow">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md -top-6 left-6 shadow-lg">
                  {/* Heroicon: scale */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-6-2m6 2l3 9M18 7l-3 9m-3-9l-3 9" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-semibold leading-6 text-gray-900 dark:text-white">AI Suggestions</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                Our AI-powered suggestions will help you improve your resume's content and formatting.
              </dd>
            </div>
            {/* Resume Visualizer */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-100 dark:border-gray-700 hover:shadow-blue-100 dark:hover:shadow-cyan-900 transition-shadow">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md -top-6 left-6 shadow-lg">
                  {/* Heroicon: lightning-bolt */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-semibold leading-6 text-gray-900 dark:text-white">Resume Visualizer</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                See your resume and the analysis side-by-side, with highlighted sections for improvement.
              </dd>
            </div>
            {/* Multiple Plans */}
            <div className="relative bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-blue-100 dark:border-gray-700 hover:shadow-blue-100 dark:hover:shadow-cyan-900 transition-shadow">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md -top-6 left-6 shadow-lg">
                  {/* Heroicon: mail */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-semibold leading-6 text-gray-900 dark:text-white">Multiple Plans</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-600 dark:text-gray-300">
                Choose the plan that's right for you, with different levels of features and support.
              </dd>
            </div>
          </dl>
        </div>
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-2">Why Choose Resume Roster?</h3>
          <p className="text-lg text-gray-700 dark:text-gray-200 max-w-2xl mx-auto">
            Our platform combines cutting-edge AI with a user-friendly interface, ensuring your resume stands out to both recruiters and Applicant Tracking Systems. Enjoy privacy-first design, instant feedback, and continuous improvements from our dedicated team.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Features;