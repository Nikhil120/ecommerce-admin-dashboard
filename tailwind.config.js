/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "#252828",
        "light-black": "#7C7E7E",
        "light-grey": "#E9E9E9",
        sidebar: "#F9FAF9",
        white: "#FFFFFF",
        strokes: "#E9E7E8",
        "green-blue": "#008575",
        "btn-black-bg": "#122130",
        "input-stroke": "#A8A9A9",
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
