import React, { lazy, useState } from "react";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ProjectsSection from "../components/sections/ProjectSection";
import SkillSection from "../components/sections/SkillSection";

const ContactSection = lazy(() =>
  import("../components/sections/ContactSection")
);

const Home = () => {
  return (
    <>
      <HeroSection />
      <SkillSection />
      {/* <AboutSection /> */}
      <ProjectsSection />
      <ContactSection />
    </>
  );
};

export default Home;
