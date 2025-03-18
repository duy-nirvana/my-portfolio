import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Button = ({
  children,
  className = "",
  variant = "primary",
  href,
  to,
  onClick,
  type = "button",
  disabled = false,
  ...props
}) => {
  const navigate = useNavigate();

  const baseClasses =
    "inline-flex items-center justify-center px-6 py-3 rounded-lg font-medium transition-all duration-300";

  const variantClasses = {
    primary:
      "bg-accent hover:bg-accent/90 text-accent dark:text-white text-white hover:text-white",
    secondary: "bg-secondary hover:bg-secondary/80 text-light",
    outline:
      "border-2 border-accent dark:text-accent text-blue-500 hover:bg-accent dark:hover:text-white hover:text-white",
    ghost: "text-accent hover:bg-accent/10",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${className} ${
    disabled ? "opacity-50 cursor-not-allowed" : ""
  }`;

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => navigate(href)}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
