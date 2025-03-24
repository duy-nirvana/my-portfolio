export const getTechnologies = (darkMode = false) => {
  return [
    { id: "html", name: "HTML5", path: "html-icon.svg" },
    { id: "css", name: "CSS3", path: "css-icon.svg" },
    { id: "javascript", name: "Javascript", path: "javascript-icon.svg" },
    { id: "react", name: "React", path: "react-icon.svg" },
    { id: "react-native", name: "React Native", path: "react-icon.svg" },
    {
      id: "next",
      name: "Next",
      path: darkMode ? "nextjs-light-icon.svg" : "nextjs-dark-icon.svg",
    },
    {
      id: "react-hook-form",
      name: "React Hook Form",
      path: "react-hook-form-icon.svg",
    },
    {
      id: "redux",
      name: "Redux Toolkit",
      path: "redux-icon.svg",
    },
    { id: "scss", name: "SCSS", path: "scss-icon.svg" },
    { id: "tailwind", name: "TailwindCSS", path: "tailwind-icon.svg" },
    { id: "material-ui", name: "Material UI", path: "material-ui-icon.svg" },
    { id: "ant-design", name: "Ant Design", path: "ant-design-icon.svg" },
    { id: "socket-io", name: "SocketIO", path: "socket-icon.svg" },
    { id: "node", name: "NodeJS", path: "nodejs-icon.svg" },
    {
      id: "express",
      name: "Express",
      path: darkMode ? "express-light-icon.svg" : "express-dark-icon.svg",
    },
    { id: "mongodb", name: "MongoDB", path: "mongodb-icon.svg" },
    { id: "git", name: "Git", path: "git-icon.svg" },
  ];
};
