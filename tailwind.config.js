/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg0: "#FFFFFF",
        bg1: "#f1f5f9",
        btnClr0: "#ffa16c",
        btnClr1: "#3c3c3c",
        txtClr0: "#ffffff",
        txtClr1: "#3c3c3c",
      },
      fontFamily:{
        Gilroy:["Gilroy",  'sans-serif']
      }

    }
  },
  plugins: [],
};
