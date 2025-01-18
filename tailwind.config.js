/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        archivioBlack: "Archivo Black"
      },
      fontSize: {
        "20rem": "20rem"
      },
      colors: {
        dark: "black",
        light: "white",
        accent1: "#BCFF2B",
        bg1: "#01161E",
        bg2: "#17444F",
        bg3: "#C3FF1F",
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
