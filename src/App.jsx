import React, {
  createContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ScrollToHashElement from "./components/common/ScrollToHashElement";

const themes = ["dark", "light"];

export const ThemeContext = createContext();

function App() {
  const localTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState(
    themes.includes(localTheme) ? localTheme : "dark"
  );

  useEffect(() => {
    if (!localTheme) {
      localStorage.setItem("theme", theme);
    }
  }, []);

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

  const handleChangeTheme = () => {
    const themeMode = theme === "dark" ? "light" : "dark";
    setTheme(themeMode);
    localStorage.setItem("theme", themeMode);
  };

  return (
    <ThemeContext.Provider value={{ theme }}>
      <div className={theme}>
        <div className="min-h-screen flex flex-col dark:text-light text-black transition-colors">
          <Header theme={theme} onChangeTheme={handleChangeTheme} />
          <main className="flex-grow">
            <ScrollToHashElement />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
