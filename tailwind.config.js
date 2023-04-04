/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primaryGreen: "#4CBE6C",
        ice: "#F3F9FF",
        whiteSmoke: "#ECECEC",
        primaryRed: "#FF4141",
      },
      fontFamily: {
        inter: "InterRegular, sans-serif",
        interSemi: "InterSemi, sans-serif",
        interBold: "InterBold, sans-serif",
      },
    },
  },
  plugins: [],
};
