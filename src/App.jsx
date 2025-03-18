import React, { createContext, useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ScrollToHashElement from "./components/common/ScrollToHashElement";
import { twMerge } from "tailwind-merge";
// import About from './pages/About';
// import Projects from './pages/Projects';
// import Contact from './pages/Contact';
// import NotFound from './pages/NotFound';

export const ThemeContext = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    // Smooth scrolling for anchor links
    const handleAnchorClick = (e) => {
      const target = e.target.closest("a");
      if (!target) return;

      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.offsetTop - 80, // Offset for header
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  const handleChangeDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      <div className={darkMode && "dark"}>
        <div className="min-h-screen flex flex-col dark:bg-primary dark:text-light text-black bg-slate-50 transition-colors duration-00">
          <Header darkMode={darkMode} onChangeDarkMode={handleChangeDarkMode} />
          {/* <button className="mt-20" onClick={() => setDarkMode(!darkMode)}>
          DRK MODE
        </button> */}
          <main className="flex-grow ">
            <ScrollToHashElement />
            <Routes>
              <Route path="/" element={<Home />} />
              {/* <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} /> */}
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
