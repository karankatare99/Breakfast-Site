const config = {
  content: ['./app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'league-gothic': ['League Gothic', 'sans-serif'],
      },
    },
  },
  plugins: {
    '@tailwindcss/postcss': {},
  },
};

export default config;
