function HowItWorks() {
  return (
    <div className="py-12 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
            Get your resume reviewed in 3 simple steps.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <p className="text-2xl font-bold">1</p>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 dark:text-white">Upload Your Resume</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Upload your resume in PDF or DOCX format.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <p className="text-2xl font-bold">2</p>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 dark:text-white">Get Instant Feedback</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Our AI will analyze your resume and provide you with an instant feedback.
              </p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-12 h-12 mx-auto text-white bg-indigo-500 rounded-md">
                <p className="text-2xl font-bold">3</p>
              </div>
              <h3 className="mt-5 text-lg font-medium text-gray-900 dark:text-white">Improve Your Resume</h3>
              <p className="mt-2 text-base text-gray-500 dark:text-gray-400">
                Use the feedback to improve your resume and land your dream job.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowItWorks;
