/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#00D4AA",
          100: "#00D455"
        },
      },
      backgroundImage: {
        'theme-gradient': "linear-gradient(180deg, #00D4AA 0%, #00D455 100%)",
        'theme-gradient-light': "linear-gradient(180deg, rgba(0, 212, 170, 0.1) 0%, rgba(0, 212, 85, 0.1) 100%)"
      },
      fontFamily: {
        inter: '"Inter", serif',
      }
    },
  },
  plugins: [],
}

