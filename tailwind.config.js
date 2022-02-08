module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "custom_gray":"#31393C",
        "custom_dark_blue":"#027BCE",
        "custom_light_blue":"#0496FF",
        "custom_orange":"#FF8811",
        "pure_white":"#FFFFFF",
        "pure_black":"#000000",
      }
    },
  },
  plugins: [],
}
