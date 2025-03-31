import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { getTechnologies } from "../../utils";
import ProjectCard from "../common/ProjectCard";
import SectionHeading from "../common/SectionHeading";
import data from "../../data/project.json";

const ProjectsSection = () => {
  const { theme } = useContext(ThemeContext);
  const technologies = getTechnologies(theme);
  const { projects } = data;

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container-narrow">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work and passion projects"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              technologies={technologies}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
