/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'cranberry': '#9D2B35',
        'chocolate': '#7C4C3E',
        'sage': '#9CB58C',
        'cream': '#F4F4F0',
        'graphite': '#332E2C',
      },
      fontFamily: {
        'serif': ['Cormorant Garamond', 'Georgia', 'serif'],
        'handwriting': ['Great Vibes', 'cursive'],
      },
    },
  },
  plugins: [],
}
