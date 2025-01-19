/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        archivioBlack: "Archivo Black",
        teko: "Teko",
      },
      colors: {
        dark: "black",
        light: "#D8D8D8",
        accent1: "#BCFF2B",
        bg1: "#01090C",

        /* dark: "#917449",
        light: "#e7d0b8",
        accent1: "#E88D38",
        bg1: "#0e110d", */

        /*         dark: "#b8adaa",
        light: "#fdf7fa",
        accent1: "#0b4cf2",
        bg1: "#20242a", */
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

// https://huemint.com/brand-3/#palette=0e110d-e7d0b8-b69c79-917449
