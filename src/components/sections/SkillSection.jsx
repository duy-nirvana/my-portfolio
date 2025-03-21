import React, { useContext } from "react";
import SectionHeading from "../common/SectionHeading";
import { ThemeContext } from "../../App";
import { getTechnologies } from "../../utils";

function SkillSection(props) {
  const { darkMode } = useContext(ThemeContext);
  console.log({ darkMode });
  const skills = [
    {
      category: "Frontend",
      items: [
        "HTML5/CSS3",
        "JavaScript",
        "React",
        "React Native",
        "TypeScript",
        "Tailwind CSS",
        "Material UI",
        "Ant Design",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Webpack", "Vite", "npm/yarn"],
    },
  ];

  const languageSkills = getTechnologies(darkMode);

  return (
    <section id="skill" className="py-16 md:py-18">
      <div className="container-narrow">
        <SectionHeading
          title="My skills"
          subtitle="Technologies that I have used and am using now"
          align="center"
        />

        <div className="flex  flex-wrap gap-2 justify-center">
          {languageSkills.map((skill) => (
            <div
              className="flex items-center gap-1 bg-black/30 p-2 rounded-md"
              key={skill.id}
            >
              <img src={`/icons/${skill.path}`} className="w-6 h-6 min-w-6" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>

        {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div key={index} className="bg-secondary rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-accent">
                {skillGroup.category}
              </h4>
              <ul className="space-y-2">
                {skillGroup.items.map((skill, idx) => (
                  <li key={idx} className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2 text-accent"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}

export default SkillSection;
