import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md py-8 px-6 ">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Resume Roster</h3>
            <p className="text-sm">Supercharge your resume with AI.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-indigo-500">Home</Link></li>
              <li><Link to="/plans" className="hover:text-indigo-500">Plans</Link></li>
              <li><Link to="/about" className="hover:text-indigo-500">About</Link></li>
              <li><Link to="/contact" className="hover:text-indigo-500">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex justify-center space-x-4">
              <a href="#" className="hover:text-indigo-500"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-indigo-500"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-indigo-500"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4">
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
