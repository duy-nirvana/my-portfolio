import React from "react";
import { Link } from "react-router-dom";
import SectionHeading from "../common/SectionHeading";
import ProjectCard from "../common/ProjectCard";
import Button from "../common/Button";

const ProjectsSection = () => {
  const featuredProjects = [
    {
      id: "ecommerce-platform",
      title: "E-Commerce Platform",
      description:
        "A fully responsive e-commerce platform with product filtering, cart functionality, and secure checkout.",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "/api/placeholder/600/400",
    },
    {
      id: "task-management",
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, kanban board, and team assignments.",
      tags: ["Vue.js", "Firebase", "Tailwind CSS"],
      image: "/api/placeholder/600/400",
    },
    {
      id: "financial-dashboard",
      title: "Financial Dashboard",
      description:
        "Interactive financial dashboard with data visualization, expense tracking, and budget management features.",
      tags: ["React", "TypeScript", "D3.js", "Express"],
      image: "/api/placeholder/600/400",
    },
  ];

  return (
    <section id="projects" className="py-16 md:py-24">
      <div className="container-narrow">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of my recent work and passion projects"
          align="center"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button to="/projects" variant="primary">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
