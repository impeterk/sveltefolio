import defaultTheme from 'tailwindcss/defaultTheme'
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      backgroundImage: {
        'dark': 'conic-gradient(from 90deg at 50% 0%, #111, 50%, #222, #111)',
        'light': 'conic-gradient(from .5turn at bottom center, lightblue, white)'
      },
      fontFamily: {
        'code': ['Fira Code', ...defaultTheme.fontFamily.mono],
        'sans': ['Inter Variable', ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
  darkMode: ['class', '[data-theme="dark"]',]
}

