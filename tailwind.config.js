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
      keyframes: {
        shine: {
          "0%": { left: "-100px" },
          "60%": { left: "100%" },
          "100%": { left: "100%" },
        },
      },
      animation: {
        shine: "shine 1.5s ease-out infinite",
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
