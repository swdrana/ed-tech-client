/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {extend: {
      backgroundImage: {
        'hero-pattern': "url('./src/img/image-9.jpg')",
      }
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light","dark"],
    // themes: ["light"],
  },
}