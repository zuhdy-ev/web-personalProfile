/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    colors: {
      primary: "#161A30",
      secondary: "#31304D",
      tertiary: "#B6BBC4",
      fourth: "#F0ECE5",
      fifth: "#39FF14",
    },
  },
  plugins: [],
};
