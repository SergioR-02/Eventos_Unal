/** @type {import('tailwindcss').Config} */
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // toggle dark mode by adding the 'dark' class on <html>
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // use CSS variables so the runtime theme (light/dark) can change palette
        unal: 'rgb(var(--color-unal) / <alpha-value>)',
        'unal-light': 'rgb(var(--color-unal-light) / <alpha-value>)',
          'unal-gray': 'rgb(var(--color-unal-gray) / <alpha-value>)',
          surface: 'rgb(var(--color-surface) / <alpha-value>)',
          page: 'rgb(var(--color-page) / <alpha-value>)',
          text: 'rgb(var(--color-text) / <alpha-value>)',
          muted: 'rgb(var(--color-muted) / <alpha-value>)',
          border: 'rgb(var(--color-border) / <alpha-value>)',
          accent: 'rgb(var(--color-accent) / <alpha-value>)',
      },
    },
  },
  plugins: [],
};
