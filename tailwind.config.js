/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "rgba(var(--primary))",
        secondary: "rgba(var(--secondary))",
        accent: "rgba(var(--accent))",
        green: "#6A9C89",
        light: "rgba(var(--light))",
        dark: "rgba(var(--dark))",
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        // mono: ["Source Code Pro", "monospace"],
        mono: ["Source Code Pro", "monospace"],
      },
      screens: {
        xs: "480px",
      },
      animation: {
        "cursor-blink": "cursor-blink 1s step-end infinite",
      },
      keyframes: {
        "cursor-blink": {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0 },
        },
      },
    },
  },
  plugins: [],
  // darkMode: "class",
};
