/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'valentine-pink': '#FFB6C1',
        'valentine-rose': '#FFC0CB',
        'valentine-light': '#FFE4E1',
      },
    },
  },
  plugins: [],
}
