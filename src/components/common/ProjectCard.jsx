import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  const { id, title, description, tags, image, link } = project;

  return (
    <article className="group bg-secondary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-accent/10">
      <Link to={`/projects/${id}`} className="block">
        <div className="relative h-56 overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60"></div>
        </div>

        <div className="p-6">
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="text-xs font-mono py-1 px-2 rounded bg-accent/10 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>

          <h3 className="text-xl font-bold mb-2 group-hover:text-accent transition-colors">
            {title}
          </h3>

          <p className="text-light/80 mb-4">{description}</p>

          <div className="flex items-center font-medium text-accent">
            View Project
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-1 transition-transform duration-300 group-hover:translate-x-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default ProjectCard;
