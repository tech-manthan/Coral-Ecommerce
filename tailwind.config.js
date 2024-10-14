/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        Black: "#1E2832",
        "Black-5": "#1E28320d",
        Dark: "#000000",
      },
      fontFamily: {
        primary: ["Roboto", "sans-serif"],
        secondary: ["Open Sans", "sans-serif"],
        logo: ["Lora", "serif"],
        zara: ["Cinzel", "serif"],
      },
    },
  },
  plugins: [],
};
