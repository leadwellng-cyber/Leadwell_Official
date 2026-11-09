/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0b1f1a",
          900: "#0f2a22",
          800: "#173a30",
          700: "#1f4a3c",
          600: "#2a5b4a",
        },
        gold: {
          50: "#fbf6e9",
          100: "#f6ebcc",
          200: "#ecd699",
          300: "#e0bd5c",
          400: "#d4a433",
          500: "#c08a1f",
          600: "#a06f17",
          700: "#7c5415",
          800: "#5c3f15",
          900: "#423013",
        },
        cream: {
          50: "#fdfbf6",
          100: "#f8f3e9",
          200: "#efe6d2",
        },
        sand: {
          300: "#e4d8c0",
          400: "#d3c3a3",
          500: "#bda87f",
        },
      },
      fontFamily: {
        display: ["Fraunces", "ui-serif", "Georgia", "serif"],
        body: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "68ch",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
      },
      animation: {
        "slow-zoom": "slow-zoom 8s ease-out forwards",
      },
    },
  },
  plugins: [],
};
