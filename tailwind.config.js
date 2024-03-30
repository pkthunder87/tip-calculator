/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: 'Space Mono',
    },
    screens: {
      sm: '425px',
      md: '750px',
      lg: '1024px',
      xl: '1280px',
      xl2: '1440px',
    },
    extend: {
      colors: {
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'grayish-cyan': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'very-light-grayish-cyan': 'hsl(189, 41%, 97%)',
        'highlight-cyan': 'hsl(174, 53%, 60%)',
        'selected-cyan': 'hsl(170, 53%, 70%)',
        'ring-cyan': 'hsl(174, 53%, 40%)',
        'input-cyan': 'hsl(184, 19%, 68%)',
      },
    },
  },
  plugins: [],
};
