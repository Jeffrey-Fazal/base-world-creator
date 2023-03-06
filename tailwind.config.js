/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    daisyui: {
      themes: ["cyberpunk"],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}