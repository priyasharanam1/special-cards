/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#00022b",
        darkBlue: "#010e54",
        royalBlue: "#0855b1",
        skyBlue: "#4fa5d8",
        pastelBlue: "#daeaf7",
      },
    },
  },
  plugins: [],
};
