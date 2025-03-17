import React from "react";
import { twMerge } from "tailwind-merge";

const SectionHeading = ({
  title,
  subtitle,
  align = "left",
  className = "",
}) => {
  const alignmentClasses = {
    left: "items-left",
    center: "items-center",
    right: "items-right",
  };

  return (
    <div
      className={twMerge(
        " mb-12 w-full flex flex-col",
        alignmentClasses[align],
        className
      )}
    >
      <h2 className="w-fit relative text-3xl md:text-4xl font-bold mb-4 after:absolute after:w-full after:h-6 z-10 after:top-1/2 after:-z-10 dark:after:bg-accent/30 after:bg-blue-300 after:left-10 after:transition-colors duration-200">
        {title}
      </h2>
      {subtitle && <p className="text-xl text-light/80">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
