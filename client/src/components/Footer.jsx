import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner py-12 px-6 mt-16">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-8 border-b border-gray-200 dark:border-gray-700">
          {/* Brand */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700">
              Resume Roster
            </h3>
            <p className="text-sm mb-2">Supercharge your resume with AI.</p>
            <span className="inline-block px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-cyan-300 rounded-full text-xs font-semibold mt-2">
              v1.0.0
            </span>
          </div>
          {/* Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-500 transition-colors">Home</Link></li>
              <li><Link to="/plans" className="hover:text-indigo-500 transition-colors">Plans</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500 transition-colors">About</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-500 transition-colors">Contact</Link></li>
              <li><Link to="/login" className="hover:text-indigo-500 transition-colors">Login</Link></li>
              <li><Link to="/register" className="hover:text-indigo-500 transition-colors">Register</Link></li>
            </ul>
          </div>
          {/* Resources */}
          <div>
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://github.com/arun-kushwaha/Resume-Roaster" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                  GitHub Repo
                </a>
              </li>
              <li>
                <a href="https://docs.resumeroster.com" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="mailto:support@resumeroster.com" className="hover:text-indigo-500 transition-colors">
                  Support
                </a>
              </li>
              <li>
                <a href="/privacy" className="hover:text-indigo-500 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="/terms" className="hover:text-indigo-500 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          {/* Social */}
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-4 mb-4">
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors text-2xl">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors text-2xl">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors text-2xl">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/arun-kushwaha/Resume-Roaster" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 transition-colors text-2xl">
                <i className="fab fa-github"></i>
              </a>
            </div>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Stay connected for updates & tips!
            </p>
          </div>
        </div>
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-2">
          <p>&copy; {new Date().getFullYear()} Resume Roster. All rights reserved.</p>
          <p className="text-sm">
            Made with <span className="text-red-500">&hearts;</span> by Team Resume Roster
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;