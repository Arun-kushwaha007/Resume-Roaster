// types/index.d.ts

export interface User {
  id: string;
  name: string;
  email: string;
  role?: "user" | "admin";
  createdAt?: string;
}

export interface AuthResponse {
  token: string;
  user: User;
}

export interface JwtPayload {
  id: string;
  email: string;
  iat?: number;
  exp?: number;
}

// Extend Next.js types for session if needed
declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_API_URL: string;
    }
  }
}
