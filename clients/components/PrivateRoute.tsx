"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  const router = useRouter();
  const [isAuth, setIsAuth] = useState<boolean | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      router.push("/login");
      setIsAuth(false);
    } else {
      setIsAuth(true);
    }
  }, [router]);

  if (isAuth === null) return null; // prevent flicker
  return <>{children}</>;
};

export default PrivateRoute;
