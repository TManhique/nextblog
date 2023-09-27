"use client"; // Indicate that this component is for client-side rendering

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    // Check if window.localStorage is available before accessing it
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Fallback value for server-side rendering or when localStorage is unavailable
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  useEffect(() => {
    if (typeof window !== "undefined" && window.localStorage) {
      // Check if window.localStorage is available before using it
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
