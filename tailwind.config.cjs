/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#2e3192",
        third: "#787878",
        fourth: "#263238",
        fifth: "#F0D031",
      },
      container: {
        center: true,
      },
      fontFamily: {
        raleway: ["Raleway", "Arial", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
