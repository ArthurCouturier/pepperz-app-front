/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'josefin': ['Josefin Sans', 'sans-serif'],
        'cinzel': ['Cinzel', 'sans-serif'],
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.bg-force': {
          backgroundColor: '#242424 !important',
        },
      };
      addUtilities(newUtilities);
    }
  ],
}

