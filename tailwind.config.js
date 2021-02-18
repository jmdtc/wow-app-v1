module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      height: {
        "avatar": "2rem",
      },
      width: {
        "tab": "160px"
      }
    },
  },
  variants: {
    extend: {
      //borderColor: ["hover"],
    },
  },
  plugins: [],
}