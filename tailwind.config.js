/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: "Poppins, Arial, sans-serif",
    },
    extend: {
      backgroundImage: {
        "orange-gradient": "var(--orange-gradient)",
      },
    },
    colors: {
      blue: "#4bc7ef",
      purple: "#484f9d",
      green: "#9DD88D",
      yellow: "#ECE071",
    },
  },
  plugins: [],
};
