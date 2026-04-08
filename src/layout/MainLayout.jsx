import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

function MainLayout() {
  const [darkMode, setDarkMode] = useState(() => {
    // Check localStorage first
    const saved = localStorage.getItem("darkMode");
    if (saved !== null) {
      return JSON.parse(saved);
    }
    // Check system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);
  return (
    <>
       <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default MainLayout;
