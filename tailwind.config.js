/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '260px',
        'sm': '400px',
        'md': '700px',
        'lg': '1100px',
        'xl': '1450px'
      },
      backgroundImage: {
        backgroundHeader: "url('./assets/backgroundImage.jpg')",
      },
    }
  },
  plugins: [],
}