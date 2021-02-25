module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or "media" or "class"
  theme: {
    extend: {
      width: {
        "tab": "160px",
        "sidebar-icon": "1.5rem",
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [],
}