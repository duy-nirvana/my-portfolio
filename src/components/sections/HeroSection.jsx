import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../common/Button";
import TypingText from "../common/TypingText";

const HeroSection = () => {
  const navigate = useNavigate();

  const typingStrings = ["Frontend Developer", "Problem Solver", "PHILOCALIST"];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <span className="inline-block text-accent font-mono mb-4">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              Duy Tran
            </h1>
            <div className="text-2xl md:text-3xl font-semibold mb-6 h-12">
              <TypingText
                strings={typingStrings}
                typingSpeed={100}
                deletingSpeed={50}
                delayAfterType={2000}
              />
            </div>
            <p className="text-light/80 text-lg max-w-lg mb-8">
              I craft pixel-perfect, accessible, and performant digital
              experiences with a focus on user-centered design and clean code.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/projects" variant="primary">
                View My Work
              </Button>
              <Button to="/contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right hidden lg:block">
            <div className="relative z-10">
              <div className="bg-secondary rounded-xl p-8 h-96 w-full max-w-lg ml-auto relative overflow-hidden">
                <div className="absolute inset-0 opacity-10">
                  <div className="grid grid-cols-10 grid-rows-10 h-full w-full">
                    {Array(100)
                      .fill(0)
                      .map((_, i) => (
                        <div
                          key={i}
                          className={`
                          border border-accent/20 
                          ${Math.random() > 0.1 ? "" : "bg-accent/20"}
                        `}
                        />
                      ))}
                  </div>
                </div>

                <div className="h-full flex flex-col justify-between font-mono text-sm">
                  <div>
                    <div className="flex items-center text-light/60 mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span>Terminal</span>
                    </div>

                    <div className="space-y-2">
                      <div className="flex">
                        <span className="text-green-400 mr-2">$</span>
                        <span className="text-light/90">cd portfolio</span>
                      </div>
                      <div className="flex">
                        <span className="text-green-400 mr-2">$</span>
                        <span className="text-light/90">ls -la</span>
                      </div>
                      <div className="flex">
                        <span className="text-blue-400 mr-2">drwxr-xr-x</span>
                        <span className="text-light/90">about/</span>
                      </div>
                      <div className="flex">
                        <span className="text-blue-400 mr-2">drwxr-xr-x</span>
                        <span className="text-light/90">projects/</span>
                      </div>
                      <div className="flex">
                        <span className="text-blue-400 mr-2">drwxr-xr-x</span>
                        <span className="text-light/90">skills/</span>
                      </div>
                      <div className="flex">
                        <span className="text-blue-400 mr-2">-rw-r--r--</span>
                        <span className="text-light/90">contact.md</span>
                      </div>
                      <div className="flex">
                        <span className="text-green-400 mr-2">$</span>
                        <span className="text-light/90">cat skills.json</span>
                      </div>
                      <div className="text-accent">
                        {`{`} <br />
                        {`  "frontend": ["React", "Vue", "TypeScript"],`} <br />
                        {`  "design": ["Figma", "Tailwind", "CSS"],`} <br />
                        {`  "backend": ["Node.js", "Express", "MongoDB"]`}{" "}
                        <br />
                        {`}`}
                      </div>
                    </div>
                  </div>

                  <div className="flex">
                    <span className="text-green-400 mr-2">$</span>
                    <span className="text-light/90">npm run portfolio</span>
                    <span className="typing-cursor ml-1"></span>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute w-full h-full inset-0 translate-x-6 translate-y-6 bg-accent/20 rounded-xl -z-10"></div>
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-24 animate-fade-in">
          <a
            href="#about"
            className="text-light/60 hover:text-accent transition-colors flex flex-col items-center"
            onClick={() => navigate("#about")}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 animate-bounce"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
