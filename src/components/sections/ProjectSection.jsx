import React, { useContext } from "react";
import { ThemeContext } from "../../App";
import { getTechnologies } from "../../utils";
import ProjectCard from "../common/ProjectCard";
import SectionHeading from "../common/SectionHeading";

const ProjectsSection = () => {
  const { theme } = useContext(ThemeContext);
  const technologies = getTechnologies(theme);

  const featuredProjects = [
    {
      id: "quiz-it",
      title: "QUIZ IT",
      team_size: 1,
      date: "2024",
      description:
        "Quiz It is a game-based learning platform that lets users create, share, play quizzes, making education and fun.",
      tags: [
        "socket-io",
        "react",
        "react-hook-form",
        "redux",
        "node",
        "express",
        "mongodb",
      ],
      image: [
        "quiz-it-thumbnail.png",
        "quiz-it-1.png",
        "quiz-it-2.png",
        "quiz-it-3.png",
        "quiz-it-4.png",
        "quiz-it-5.png",
        "quiz-it-6.png",
      ],
      source_url: "https://github.com/duy-nirvana/quiz-it",
      live_url: "https://quiz-it-beta.vercel.app/",
    },
    {
      id: "quiz-it",
      title: "QUIZ IT",
      team_size: 1,
      date: "2024",
      description:
        "Quiz It is a game-based learning platform that lets users create, share, play quizzes, making education and fun.",
      tags: [
        "socket-io",
        "react",
        "react-hook-form",
        "redux",
        "node",
        "express",
        "mongodb",
      ],
      image: null,
      source_url: "https://github.com/duy-nirvana/quiz-it",
      live_url: "https://quiz-it-beta.vercel.app/",
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
            <ProjectCard
              key={project.id}
              project={project}
              technologies={technologies}
            />
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Button to="/projects" variant="primary">
            View All Projects
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
