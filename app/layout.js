"use client";

import "@styles/globals.css";
import { Children, useState } from "react";
import { AuthProvider } from "@contexts/authContext";
import MainContextLayout from "./mainContextLayout";

const RootLayout = ({ children }) => {
  return (
    <body>
      <AuthProvider>
        <MainContextLayout>{children}</MainContextLayout>
      </AuthProvider>
    </body>
  );
};

export default RootLayout;
