import React, { lazy, useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectSection";

const ContactSection = lazy(() =>
  import("../components/sections/ContactSection")
);

const Home = () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
