module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        teal: {
          600: "#229ca6",
          700: "#177e8a"
        },
        blue: {
          50: "#f0f8ff"
        }
      }
    },
  },
  darkMode: "class",
  plugins: [],
}