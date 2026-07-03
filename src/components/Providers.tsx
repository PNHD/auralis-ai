"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "light" | "dark";
type Dir = "ltr" | "rtl";

interface AppContextType {
  theme: Theme;
  dir: Dir;
  toggleTheme: () => void;
  toggleDir: () => void;
  setTheme: (theme: Theme) => void;
  setDir: (dir: Dir) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function Providers({ children }: { children: React.ReactNode }) {
  const [theme, setThemeState] = useState<Theme>("light");
  const [dir, setDirState] = useState<Dir>("ltr");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read initial settings
    const savedTheme = localStorage.getItem("auralis-theme") as Theme;
    const savedDir = localStorage.getItem("auralis-dir") as Dir;

    const initialTheme = savedTheme || "light";
    const initialDir = savedDir || "ltr";

    setThemeState(initialTheme);
    setDirState(initialDir);

    // Apply to DOM
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    document.documentElement.setAttribute("dir", initialDir);
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "light" ? "dark" : "light";
    setThemeState(nextTheme);
    localStorage.setItem("auralis-theme", nextTheme);
    if (nextTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const toggleDir = () => {
    const nextDir = dir === "ltr" ? "rtl" : "ltr";
    setDirState(nextDir);
    localStorage.setItem("auralis-dir", nextDir);
    document.documentElement.setAttribute("dir", nextDir);
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("auralis-theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  const setDir = (newDir: Dir) => {
    setDirState(newDir);
    localStorage.setItem("auralis-dir", newDir);
    document.documentElement.setAttribute("dir", newDir);
  };

  return (
    <AppContext.Provider value={{ theme, dir, toggleTheme, toggleDir, setTheme, setDir }}>
      <div className={theme === "dark" ? "dark" : ""}>
        {children}
      </div>
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useApp must be used within Providers");
  }
  return context;
}
