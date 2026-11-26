/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#eefbf8',
          100: '#d5f5ef',
          200: '#aeeae1',
          300: '#7bd8cd',
          400: '#47bdb3',
          500: '#26a29a',
          600: '#19827e',
          700: '#176966',
          800: '#175453',
          900: '#164646',
        },
        sand: {
          50: '#faf8f5',
          100: '#f3efe9',
          200: '#e6ded2',
          300: '#d4c7b4',
          400: '#bdab91',
          500: '#a78f6f',
          600: '#8f764f',
          700: '#6f5c3d',
          800: '#4b3f2c',
          900: '#2e281e',
        },
        accent: {
          300: '#f7d38a',
          400: '#f0bc5e',
          500: '#e5a53b',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'pulse-soft': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.55' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out both',
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
