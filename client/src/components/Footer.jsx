import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow-md py-4 px-6 mt-12">
      <div className="container mx-auto text-center text-gray-600 dark:text-gray-300">
        <p>&copy; {new Date().getFullYear()} Resume Roster. All rights reserved.</p>
        <p className="text-sm">
          Made with <span className="text-red-500">&hearts;</span> by Team Resume Roster
        </p>
      </div>
    </footer>
  );
};

export default Footer;
