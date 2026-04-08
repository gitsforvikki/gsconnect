import { useState, useEffect } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { NavLink } from "react-router-dom";
import { routes } from "../routes";

function Navbar({ darkMode, setDarkMode, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", url: routes.HOME },
    { label: "Events", url: routes.EVENTS },
    { label: "Festivals", url: routes.FESTIVALS },
    { label: "Worships", url: routes.WORSHIPS },
    { label: "Sports", url: routes.SPORTS },
    { label: "Gallery", url: routes.GALLERY },
  ];

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`${darkMode ? "dark" : ""} sticky top-0 z-50`}>
      <div className="bg-white dark:bg-slate-900 border-b border-gray-200 dark:border-slate-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-16 md:h-20">
            {/* Logo */}
            <div>
              <h1 className="text-2xl md:text-3xl font-bold text-emerald-700 dark:text-emerald-300">
                <span className="text-emerald-600 dark:text-emerald-400">
                  🏘️
                </span>{" "}
                Village Connect
              </h1>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map(({ url, label }) => (
                <NavLink
                  to={url}
                  className="px-3 py-2 rounded text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {label}
                </NavLink>
              ))}
            </div>

            {/* Theme Toggle & Mobile Menu */}
            <div className="flex items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-2 rounded bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                aria-label="Toggle theme"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden pb-4 space-y-2 flex flex-col">
              {navItems.map(({ url, label }) => (
                <NavLink
                  to={url}
                  onClick={() => handleNavClick()}
                  className="px-3 py-2 rounded text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-800"
                >
                  {label}
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
