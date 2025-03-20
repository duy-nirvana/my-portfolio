import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";

const Footer = () => {
  const socialLinks = [
    { name: "Facebook", url: "https://fb.com/tkh.duy", icon: FaFacebook },
    { name: "LinkedIn", url: "https://linkedin.com/", icon: "linkedin" },
    { name: "Twitter", url: "https://twitter.com/", icon: "twitter" },
  ];

  const handleScrollIntoView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({});
    }
  };

  return (
    <footer className="dark:bg-secondary py-6 bg-slate-100">
      <div className="container-narrow">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              to="/#home"
              className="text-2xl font-bold mb-4 block hover:text-accent transition-colors"
              onClick={() => handleScrollIntoView("home")}
            >
              <span className="font-mono">DuyTK</span>
            </Link>
            <p className="text-light/80 max-w-md">
              Developer & designer crafting performant, accessible digital
              experiences with a focus on creativity.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/#home"
                  className="text-light/80 hover:text-accent transition-colors"
                  onClick={() => handleScrollIntoView("home")}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/#skill"
                  className="text-light/80 hover:text-accent transition-colors"
                  onClick={() => handleScrollIntoView("skill")}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  to="/#projects"
                  className="text-light/80 hover:text-accent transition-colors"
                  onClick={() => handleScrollIntoView("projects")}
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to="/#contact"
                  className="text-light/80 hover:text-accent transition-colors"
                  onClick={() => handleScrollIntoView("contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Social</h3>
            <ul className="space-y-2">
              {socialLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <a
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-light/80 hover:text-accent transition-colors flex items-center"
                    >
                      <Icon className="w-5 h-5 mr-2" />
                      {link.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex justify-center text-light pt-5">
          <p>
            Made by <span className="text-xl">✌️</span> and{" "}
            <span className="text-xl">💻</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
