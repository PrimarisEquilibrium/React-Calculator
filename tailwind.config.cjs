/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#313131",
        secondary: "#F69A06",
        tertiary: "#A0A0A0"
      }
    },
  },
  plugins: [],
}