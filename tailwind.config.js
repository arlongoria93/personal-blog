/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["dark"],
  },
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
};
