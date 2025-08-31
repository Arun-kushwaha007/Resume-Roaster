function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-10">
      <section className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-blue-100 dark:border-gray-700 p-8 mb-10">
        <h2 className="text-4xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-700 dark:text-gray-200 text-center mb-6">
          We'd love to hear from you! Whether you have questions, feedback, partnership ideas, or need support, our team is here to help.
        </p>
        <div className="flex flex-col items-center gap-4">
          <a
            href="mailto:support@resumeroster.com"
            className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-400 text-white font-bold rounded-lg shadow hover:from-blue-700 hover:to-cyan-500 transition-all"
          >
            support@resumeroster.com
          </a>
          <span className="text-gray-500 dark:text-gray-400 text-sm">
            We typically respond within 24 hours.
          </span>
        </div>
      </section>
      <section className="max-w-2xl mx-auto bg-blue-50 dark:bg-gray-800 rounded-xl p-6 shadow border border-blue-100 dark:border-gray-700">
        <h3 className="text-2xl font-bold text-blue-700 dark:text-cyan-400 mb-2">Connect with us</h3>
        <div className="flex gap-6 justify-center mt-4">
          <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700 dark:hover:text-cyan-400 transition-colors text-2xl">
            <i className="fab fa-twitter"></i> Twitter
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-900 dark:hover:text-cyan-400 transition-colors text-2xl">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="https://github.com/arun-kushwaha/Resume-Roaster" target="_blank" rel="noopener noreferrer" className="text-gray-800 hover:text-black dark:text-gray-200 dark:hover:text-white transition-colors text-2xl">
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactPage;