/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#081428",
        accent: "#6942E2",
        mint: "#28E7C5",
        soft: "#FBFAFF",
      },
      fontFamily: {
        syne: ["var(--font-syne)", "Syne", "sans-serif"],
      },
    },
  },
  plugins: [],
};
