"use client";

import "@styles/globals.css";
import { AuthProvider } from "@contexts/authContext";

const RootLayout = ({ children }) => {
  return (
    <body>
      <AuthProvider>{children}</AuthProvider>
    </body>
  );
};

export default RootLayout;
