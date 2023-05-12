/** @type {import('tailwindcss').Config} **/
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    // material tailwind
    "./node_modules/@material-tailwind/react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      screens: {
        desktop: "1330px",
      },
    },
    extend: {
      colors: {
        whiteTransparent: "rgba(255, 255, 255, 0.22)",
        blueDark: "#0a1e3a",
        bgBlue: "rgba(53, 76, 255, 0.24)",
        bgBlueLight: "#202d51",
      },
    },
  },
  plugins: [],
});
