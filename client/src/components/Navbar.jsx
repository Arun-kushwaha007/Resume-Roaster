import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50 transition-all duration-300">
      <div className="flex items-center space-x-3">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/icon.svg" alt="Logo" className="w-10 h-10 drop-shadow-md" />
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700 tracking-tight drop-shadow">
            Resume Roster
          </span>
        </Link>
      </div>
      <div className="space-x-8 flex items-center">
        <Link
          to="/"
          className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-200"
        >
          Home
        </Link>
        <Link
          to="/plans"
          className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-200"
        >
          Plans
        </Link>
        <Link
          to="/about"
          className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-200"
        >
          About
        </Link>
        <Link
          to="/contact"
          className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-200"
        >
          Contact
        </Link>
        {token ? (
          <>
            <Link
              to="/profile"
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              Profile
            </Link>
            <button
              onClick={handleLogout}
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              Login
            </Link>
            {/* <Link
              to="/register"
              className="text-gray-700 dark:text-gray-200 font-medium hover:text-blue-700 dark:hover:text-cyan-400 transition-colors duration-200"
            >
              Register
            </Link> */}
          </>
        )}
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          aria-label="Toggle Dark Mode"
          className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-blue-100 dark:hover:bg-slate-700 transition-colors duration-200 shadow"
        >
          {theme === "dark" ? (
            // Sun icon for light mode
            <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
            </svg>
          ) : (
            // Moon icon for dark mode
            <svg className="w-6 h-6 text-blue-700" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path d="M21 12.79A9 9 0 1111.21 3a7 7 0 109.79 9.79z" />
            </svg>
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;