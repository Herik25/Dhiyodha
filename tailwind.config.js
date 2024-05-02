/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      'poppins' : 'Poppins, Arial, sans-serif',
    },
    extend: {},
    colors: {
      blue: "#4316A0",
      purple: "#4F2485",
      green: "#9DD88D",
      yellow: "#ECE071"
    },
  },
  plugins: [],
};
