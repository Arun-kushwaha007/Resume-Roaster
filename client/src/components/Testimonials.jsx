function Testimonials() {
  return (
    <div className="py-12 bg-white dark:bg-gray-800">
      <div className="max-w-4xl px-4 mx-auto sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            What Our Users Say
          </h2>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-700">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                “This is the best resume checker I have ever used. I got instant feedback and was able to improve my resume in minutes.”
              </p>
              <div className="mt-4">
                <p className="font-medium text-gray-900 dark:text-white">John Doe</p>
                <p className="text-gray-500 dark:text-gray-400">Software Engineer</p>
              </div>
            </div>
            <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-700">
              <p className="text-lg text-gray-500 dark:text-gray-400">
                “I was able to land my dream job after using this tool. The AI suggestions were spot on and helped me a lot.”
              </p>
              <div className="mt-4">
                <p className="font-medium text-gray-900 dark:text-white">Jane Smith</p>
                <p className="text-gray-500 dark:text-gray-400">Product Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
