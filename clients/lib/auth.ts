"use client";
import axios from "axios";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000/api";

// Store JWT token in localStorage
export const setToken = (token: string) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", token);
  }
};

export const getToken = (): string | null => {
  if (typeof window !== "undefined") {
    return localStorage.getItem("token");
  }
  return null;
};

export const removeToken = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
  }
};

// Axios instance with Authorization header
export const authAxios = axios.create({
  baseURL: API_BASE,
});

authAxios.interceptors.request.use((config) => {
  const token = getToken();
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Login
export const login = async (email: string, password: string) => {
  const { data } = await axios.post(`${API_BASE}/auth/login`, { email, password });
  setToken(data.token);
  return data;
};

// Register
export const register = async (email: string, password: string, name: string) => {
  const { data } = await axios.post(`${API_BASE}/auth/register`, { email, password, name });
  setToken(data.token);
  return data;
};

// Get user profile
export const getProfile = async () => {
  const { data } = await authAxios.get("/auth/me");
  return data;
};

// Logout
export const logout = () => {
  removeToken();
};
