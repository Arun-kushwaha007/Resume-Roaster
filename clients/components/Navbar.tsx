"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ThemeToggler from "./ThemeToggler";

const Navbar: React.FC = () => {
  const router = useRouter();
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const handleLogout = () => {
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <nav className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg py-4 px-8 flex justify-between items-center sticky top-0 z-50 transition-all duration-300">
      {/* Brand */}
      <div className="flex items-center space-x-3">
        <Link href="/" className="flex items-center space-x-2">
          <img src="/icon.svg" alt="Logo" className="w-10 h-10 drop-shadow-md" />
          <span className="font-extrabold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700 tracking-tight drop-shadow">
            Resume Roster
          </span>
        </Link>
      </div>

      {/* Links */}
      <div className="space-x-8 flex items-center">
        <Link href="/" className="nav-link">Home</Link>
        <Link href="/plans" className="nav-link">Plans</Link>
        <Link href="/about" className="nav-link">About</Link>
        <Link href="/contact" className="nav-link">Contact</Link>

        {token ? (
          <>
            <Link href="/profile" className="nav-link">Profile</Link>
            <button onClick={handleLogout} className="nav-link">Logout</button>
          </>
        ) : (
          <>
            <Link href="/login" className="nav-link">Login</Link>
          </>
        )}

        <ThemeToggler />
      </div>
    </nav>
  );
};

export default Navbar;
