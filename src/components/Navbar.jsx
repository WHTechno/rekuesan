import React from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle"; // Pastikan path-nya sesuai jika file dipindahkan

const links = [
  { name: "Home", path: "/" },
  { name: "Service", path: "/service" },
  { name: "About", path: "/about" },
];

export default function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-white to-blue-300 dark:from-gray-900 dark:to-gray-800 shadow-md sticky top-0 z-50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-700 dark:text-white select-none cursor-default">
          WHTechno
        </div>

        {/* Menu */}
        <div className="flex items-center space-x-6 text-blue-800 dark:text-gray-100 font-semibold text-lg">
          {links.map(({ name, path }) => (
            <NavLink
              key={name}
              to={path}
              end
              className={({ isActive }) =>
                isActive
                  ? "border-b-2 border-blue-700 dark:border-white pb-1"
                  : "hover:border-b-2 hover:border-blue-400 dark:hover:border-gray-300 pb-1 transition"
              }
            >
              {name}
            </NavLink>
          ))}

          {/* Toggle Theme */}
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
