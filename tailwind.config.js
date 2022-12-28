/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
      './app/**/*.{js,ts,jsx,tsx}',
   ],
   theme: {
      colors: {
         black: '#000',
         white: '#fff',
         dark_background: '#0f172a',
         lizard_green: '#00ffb8',
         happy_pink: '#ea92ff',
      },
      extend: {},
   },
   plugins: [require('@tailwindcss/line-clamp')],
};
