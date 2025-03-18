import React, { useState, useEffect } from "react";
import {
  Link,
  NavLink,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { twMerge } from "tailwind-merge";

const navLinks = [
  { name: "Home", path: "#home" },
  { name: "About", path: "#about" },
  { name: "Projects", path: "#projects" },
  { name: "Contact", path: "#contact" },
];

const Header = ({ darkMode, onChangeDarkMode }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isManualScroll, setIsManualScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (isManualScroll) return;

      let currentSection = "";
      navLinks.forEach((section) => {
        const element = document.getElementById(section.path.split("#")[1]);
        if (element) {
          const { top } = element.getBoundingClientRect();
          if (top <= 200) {
            currentSection = section.path;
          }
        }
      });

      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isManualScroll]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigateSection = (path) => {
    navigate(path);
    setActiveSection(path);
    setIsManualScroll(true);

    // Scroll to section smoothly
    const element = document.getElementById(path);
    if (element) {
      element.scrollIntoView({});
    }

    // Reset manual scroll after a short delay (after scroll finishes)
    setTimeout(() => setIsManualScroll(false), 1000);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/50 dark:bg-primary/90 backdrop-blur-sm py-4 shadow-lg text-white"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        <a
          href="#home"
          className="text-2xl font-bold hover:text-accent transition-colors"
        >
          <span className="font-mono">DuyTK</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-8 items-center">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.path}
                  onClick={() => handleNavigateSection(link.path)}
                  className={twMerge(
                    activeSection === link.path
                      ? "nav-link active"
                      : "nav-link text-black"
                  )}
                >
                  {link.name}
                </a>
                {/* <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    isActive ? "nav-link active" : "nav-link"
                  }
                >
                  {link.name}
                </NavLink> */}
              </li>
            ))}
            <li className="flex items-center">
              <button
                onClick={onChangeDarkMode}
                className="bg-primary dark:bg-accent p-1.5 rounded-md"
              >
                {darkMode ? (
                  <IoSunnyOutline className="text-white w-5 h-5" />
                ) : (
                  <IoMoonOutline className={twMerge("text-white w-5 h-5")} />
                )}
              </button>
            </li>
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden z-50 text-light focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <div className="relative w-6 h-5">
            <span
              className={`absolute h-0.5 w-6 bg-light transform transition-all duration-300 ${
                isOpen ? "rotate-45 top-2" : "top-0"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-light top-2 transition-all duration-300 ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-light transform transition-all duration-300 ${
                isOpen ? "-rotate-45 top-2" : "top-4"
              }`}
            ></span>
          </div>
        </button>

        {/* Mobile Navigation */}
        <div
          className={`fixed inset-0 bg-primary flex flex-col items-center justify-center transition-all duration-300 ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          } md:hidden`}
        >
          <nav className="text-center">
            <ul className="space-y-8">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    onClick={closeMenu}
                    className={({ isActive }) =>
                      `text-2xl ${
                        isActive
                          ? "text-accent"
                          : "text-light hover:text-accent"
                      } transition-colors`
                    }
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
