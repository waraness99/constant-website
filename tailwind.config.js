/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#ffffff",
        "white-10": "#ffffff10",
        "white-20": "#ffffff20",
        black: "#05010d",
        red: "#ff6363",
        purple: "#a485ff",
        blue: "#2bafff",
        green: "#59d499",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        serif: ["Inter", "serif"],
      },
      fontSize: {
        xs: ".875rem",
        sm: "1rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1.5rem",
        "2xl": "2rem",
        "3xl": "2.25rem",
        "4xl": "3rem",
        "5xl": "3.75rem",
        "6xl": "5rem",
      },
    },
  },
  plugins: [],
};
