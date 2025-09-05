"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import axios from "axios";

const Register: React.FC = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/auth/register", { username, email, password });
      localStorage.setItem("token", res.data.token);
      router.push("/profile");
    } catch (err: any) {
      console.error(err.response?.data || err.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 via-white to-cyan-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-blue-100 dark:border-gray-700">
        <h2 className="text-3xl font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-500 to-cyan-400 dark:from-cyan-400 dark:via-blue-400 dark:to-blue-700">
          Register
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
          <input type="text" name="username" value={username} onChange={onChange} placeholder="Username" required className="input" />
          <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required className="input" />
          <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required className="input" />
          <button type="submit" className="btn-primary w-full">Register</button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-300">
          Already have an account?{" "}
          <Link href="/login" className="font-medium text-blue-600 dark:text-cyan-400 hover:underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
