import React from "react";
import Button from "../common/Button";
import TypingText from "../common/TypingText";
import { FaCircleArrowDown } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";

const HeroSection = () => {
  const typingStrings = ["Frontend Developer", "Problem Solver"];

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container-narrow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-in-left">
            <span className="inline-block text-accent mb-4 font-semibold text-lg">
              Hello, I'm
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-secondary">
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
            <p className="text-secondary/80 text-lg max-w-lg mb-8">
              Passionate Frontend Developer with 3 years of experience building
              dynamic, responsive, and user-friendly web applications
            </p>
            <div className="flex flex-wrap gap-4">
              <Button to="/cv.pdf" variant="primary" target="_blank">
                <div className="flex gap-2 items-center">
                  <p>My CV</p>
                  <HiOutlineExternalLink className="w-5 h-5" />
                </div>
              </Button>
              <Button href="#contact" variant="outline">
                Get In Touch
              </Button>
            </div>
          </div>

          <div className="relative animate-slide-in-right hidden lg:block w-96 h-96">
            <img src="/avatar.png" className="rounded-xl h-full w-full" />
            <div className="absolute w-full h-full inset-0 translate-x-6 translate-y-6 bg-accent/20 rounded-xl -z-10"></div>
          </div>
        </div>

        <div className="flex justify-center mt-12 lg:mt-40 ">
          <a
            href="#skill"
            className="dark:text-light text-primary dark:hover:text-accent transition-colors flex flex-col items-center"
            onClick={() =>
              document
                .getElementById("skill")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm mb-2 text-secondary">Scroll Down</span>
            <FaCircleArrowDown className="w-5 h-5 min-w-5 animate-bounce text-secondary" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
