"use client"; // Indicate that this component is for client-side rendering

import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window !== "undefined" && window.localStorage) {
    // Check if window.localStorage is available before accessing it
    const value = localStorage.getItem("theme");
    return value || "light";
  }
  return "light"; // Fallback value for when localStorage is unavailable
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });



  const toggle = () => {
    setTheme((theme === 'light' ? 'dark' : 'light'));
  };


  useEffect(() => {
      localStorage.setItem("theme", theme);
  }, [theme]);



  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
