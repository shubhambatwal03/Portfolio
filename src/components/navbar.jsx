// import React from "react";
import { Sun, Moon, Download } from "lucide-react";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav
      className={`fixed top-0 w-full shadow-md z-10 transition-all duration-300 ${
        darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-3xl font-poppins-sans-serif font-semibold">
          {" "}
          <a href="/">
            Shubham&nbsp;
            <span className="font-extrabold text-amber-500">Batwal</span>
          </a>
        </h1>

        <ul className="flex space-x-6 items-center">
          <li>
            <a href="#home" className="hover:text-amber-500 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a
              href="#overview"
              className="hover:text-amber-500 transition-colors"
            >
              Overview
            </a>
          </li>
          <li>
            <a
              href="#projects"
              className="hover:text-amber-500 transition-colors"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-amber-500 transition-colors"
            >
              Contact
            </a>
          </li>

          {/* Download Resume */}
          <li>
            <a
              href="ShubzResume.pdf"
              download="ShubzResume.pdf"
              className={`flex items-center gap-1 px-3 py-1 rounded-lg transition-colors ${
                darkMode
                  ? "bg-amber-500 hover:bg-amber-600 text-gray-900"
                  : "bg-amber-500 hover:bg-amber-600 text-white"
              }`}
            >
              <Download size={16} />
              Resume
            </a>
          </li>

          {/* Dark/Light Mode Toggle */}
          <li>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2 rounded-full transition-colors ${
                darkMode
                  ? "bg-gray-700 hover:bg-gray-600 text-amber-500"
                  : "bg-gray-200 hover:bg-gray-300 text-amber-500"
              }`}
              aria-label={
                darkMode ? "Switch to light mode" : "Switch to dark mode"
              }
            >
              {darkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
