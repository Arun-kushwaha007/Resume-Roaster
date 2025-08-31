function Features() {
  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Features
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Everything you need to create a job-winning resume.
          </p>
        </div>
        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  {/* Heroicon name: globe-alt */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 9a9 9 0 019-9" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">ATS Score</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                Get an instant analysis of your resume's ATS-friendliness and see how it stacks up against other resumes.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  {/* Heroicon name: scale */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l-6-2m6 2l3 9M18 7l-3 9m-3-9l-3 9" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">AI Suggestions</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                Our AI-powered suggestions will help you improve your resume's content and formatting.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  {/* Heroicon name: lightning-bolt */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">Resume Visualizer</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                See your resume and the analysis side-by-side, with highlighted sections for improvement.
              </dd>
            </div>
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center w-12 h-12 text-white bg-indigo-500 rounded-md">
                  {/* Heroicon name: mail */}
                  <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <p className="ml-16 text-lg font-medium leading-6 text-gray-900 dark:text-white">Multiple Plans</p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500 dark:text-gray-400">
                Choose the plan that's right for you, with different levels of features and support.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

export default Features;
