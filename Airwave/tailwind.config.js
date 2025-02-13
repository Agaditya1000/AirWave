/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        skyline: {
          DEFAULT: '#87CEEB',
          dark: '#5F8FB4',
        },
        bora: {
          DEFAULT: '#9B4F96',
          light: '#C17FBD',
        },
        accent: {
          cream: '#FAEBD7',
        },
        text: {
          dark: '#2E2E2E',
          light: '#FFFFFF',
        },
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
      },
    },
  },
  plugins: [],
};