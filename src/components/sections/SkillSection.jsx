import React, { useContext } from "react";
import SectionHeading from "../common/SectionHeading";
import { ThemeContext } from "../../App";
import { getTechnologies } from "../../utils";

function SkillSection(props) {
  const { theme } = useContext(ThemeContext);

  const languageSkills = getTechnologies(theme);

  return (
    <section id="skill" className="py-16 md:py-18">
      <div className="container-narrow">
        <SectionHeading
          title="My skills"
          subtitle="Technologies I have used and am currently using"
          align="center"
        />

        <div className="flex flex-wrap gap-2 justify-center">
          {languageSkills.map((skill) => (
            <div
              className="flex items-center gap-1 bg-dark text-secondary p-2 rounded-md"
              key={skill.id}
            >
              <img src={`/icons/${skill.path}`} className="w-6 h-6 min-w-6" />
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SkillSection;
