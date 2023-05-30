/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      orange: "#ED4C21",
      dark: "#122333",
      white: "#FFF",
      gray: "#888C93",
      gray2: "#666",
      darkGray: "#444444",
      lightGray: "#F2F8FA",
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: false,
  },
};
