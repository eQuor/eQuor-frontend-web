import React, { useState, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

const RouteProtector = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/auth/signin");
    }
  }, [isAuthenticated]);
  return isAuthenticated ? children : null;
};

export default RouteProtector;
