/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#171717",
        secondary: "#262626",
        accent: "#dc2f02",
        green: "#6A9C89",
        light: "#f5f5f5",
      },
      fontFamily: {
        sans: ["Lexend", "sans-serif"],
        // mono: ["Source Code Pro", "monospace"],
        mono: ["Lexend", "monospace"],
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
  darkMode: "class",
};
