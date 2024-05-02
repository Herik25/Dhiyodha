/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        arrowRotate: "rotate ease-in-out 0.1s",
      },
    },
    colors: {
      blue: "#4316A0",
      purple: "#4F2485",
    },
  },
  plugins: [],
};
