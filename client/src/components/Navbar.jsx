import { Link, useNavigate } from "react-router-dom";
import ThemeToggler from "./ThemeToggler";

const Navbar = () => {
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
        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;