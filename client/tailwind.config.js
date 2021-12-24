module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgd: "#222831",
        bgl: "#393E46",
        primary: "#D65A31",
        secondary: "#EEEEEE",
      },
      fontFamily: {
        body: ['Nunito'],
      }
    },
  },
  plugins: [],
}
