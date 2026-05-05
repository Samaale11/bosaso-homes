/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-container": "#001F3F", // Deep Navy
        "secondary-fixed-dim": "#D4AF37", // Metallic Gold
        "surface-container-lowest": "#ffffff", // Pure White Cards
        "surface-container": "#f8f9fa", // Light Gray Background
        "on-surface-variant": "#43474e", // Muted Text
        "outline-variant": "#e1e3e4" // Subtle Borders
      },
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      }
    },
  },
  plugins: [],
};