import React from "react";
import { useTheme } from "../context/ThemeContext";

export default function ThemeToggle() {
  const { darkMode, setDarkMode } = useTheme();

  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="text-xl px-2 py-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition"
      title="Toggle theme"
    >
      {darkMode ? "🌞" : "🌙"}
    </button>
  );
}
