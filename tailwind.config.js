/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        feria: {
          ivory: '#F8F3EA',
          cream: '#FFFDF7',
          paper: '#F4EDE2',
          paperSoft: '#FBF7EF',
          olive: '#24381F',
          oliveSoft: '#3E5637',
          moss: '#5F7358',
          sage: '#A9AD93',
          taupe: '#A89580',
          sand: '#D8C9B7',
          clay: '#B98F66',
          line: '#E2D6C7',
          ink: '#263021',
          muted: '#776B5C',
          white: '#FFFDF8',
        },
        paper: '#F8F3EA',
        ink: '#263021',
        forest: '#24381F',
        sage: '#A9AD93',
        caramel: '#A89580',
        cream: '#FFFDF7',
        line: '#E2D6C7',
      },
      boxShadow: {
        soft: '0 28px 80px rgba(38, 48, 33, 0.10)',
        card: '0 18px 45px rgba(38, 48, 33, 0.07)',
        float: '0 32px 90px rgba(38, 48, 33, 0.12)',
        insetSoft: 'inset 0 1px 0 rgba(255,255,255,0.72)',
      },
      borderRadius: {
        '3xl': '1.75rem',
        '4xl': '2.25rem',
      },
      fontFamily: {
        display: ['ui-serif', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
