/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        archivioBlack: "Archivo Black"
      },
      colors: {
        dark: "black",
        light: "white",
        accent1: "#BCFF2B",
        bg1: "#01161E",
      },
      backgroundImage: {
        boxer: "url('/public/images/boxer.png')",
        paragliding: "url('/public/images/paragliding.jpg')",
        runner: "url('/public/images/runner.jpg')",
        bike: "url('/public/images/bike.jpg')",
      },
    },
  },
  plugins: [],
};
