"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuth, setIsAuth] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isAuth") === "true" || false;
    } else {
      // Return a default value for isAuth on the server
      return false;
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("isAuth", isAuth.toString());
    }
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, setIsAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
