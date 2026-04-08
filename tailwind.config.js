/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cranberry: '#9D2B35',
        chocolate: '#7C4C3E',
        sage: '#9CB58C',
        cream: '#F4F4F0',
        graphite: '#332E2C',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        hand: ['Great Vibes', 'cursive'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out both',
        'fade-in-up': 'fadeInUp 0.8s ease-out both',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
