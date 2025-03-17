import React from "react";
import Button from "../common/Button";
import SectionHeading from "../common/SectionHeading";

const AboutSection = () => {
  const skills = [
    {
      category: "Frontend",
      items: [
        "React",
        "Vue.js",
        "JavaScript",
        "TypeScript",
        "HTML5/CSS3",
        "Tailwind CSS",
      ],
    },
    {
      category: "Design",
      items: [
        "Figma",
        "UI/UX Design",
        "Wireframing",
        "Prototyping",
        "Responsive Design",
      ],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MongoDB", "GraphQL", "REST API Design"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "VS Code", "Webpack", "Vite", "npm/yarn"],
    },
  ];

  return (
    <section id="about" className="py-16 md:py-18">
      <div className="container-narrow">
        <SectionHeading
          title="About Me"
          subtitle="Learn more about my background and what drives me"
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative inline-block">
              <div className="bg-secondary rounded-xl overflow-hidden">
                <img
                  src="/api/placeholder/400/500"
                  alt="Joshua portrait"
                  className="w-full max-w-md"
                />
              </div>

              <div className="absolute -bottom-8 -right-8 bg-accent rounded-lg p-4 shadow-lg">
                <div className="text-white text-center">
                  <div className="text-3xl font-bold">5+</div>
                  <div className="text-sm">
                    Years of
                    <br />
                    Experience
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold mb-4">
              I'm a passionate developer & designer based in New York
            </h3>
            <p className="text-light/80 mb-6">
              I specialize in creating intuitive and engaging digital
              experiences that solve real-world problems. With a background in
              both design and development, I bridge the gap between aesthetics
              and functionality.
            </p>
            <p className="text-light/80 mb-6">
              My approach combines clean, efficient code with thoughtful design
              principles to create solutions that are not only visually
              appealing but also performant and accessible. I'm constantly
              exploring new technologies and methodologies to enhance my craft.
            </p>

            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <h4 className="font-mono text-accent mb-2">Name</h4>
                <p>Duy Tran</p>
              </div>
              <div>
                <h4 className="font-mono text-accent mb-2">Email</h4>
                <p>hello@joshua.com</p>
              </div>
              <div>
                <h4 className="font-mono text-accent mb-2">Location</h4>
                <p>New York, USA</p>
              </div>
              <div>
                <h4 className="font-mono text-accent mb-2">Availability</h4>
                <p>Freelance & Full-time</p>
              </div>
            </div>

            <Button to="/about" variant="primary">
              More About Me
            </Button>
          </div>
        </div>

        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-center">My Skills</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
