/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#F9F5EF',
        ink: '#2D241C',
        forest: '#557153',
        sage: '#87986A',
        caramel: '#D6A064',
        cream: '#FFFDF8',
        line: '#E7D9C7',
      },
      boxShadow: {
        soft: '0 20px 60px rgba(91, 73, 50, 0.12)',
        card: '0 10px 30px rgba(91, 73, 50, 0.08)',
      },
      borderRadius: {
        '3xl': '1.75rem',
      },
    },
  },
  plugins: [],
};
