/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        gray1: "#1D1D1D",
        gray2: "rgba(21, 21, 21, 0)",
      },
      fontFamily: {
        Basement: ["Basement Grotesque"],
      },
      screens: {
        xs: "410px",
      },
      data: {
        checked: 'ui~="checked"',
      },
    },
  },
  plugins: [],
};
