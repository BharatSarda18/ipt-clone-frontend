/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        escaleY: 'escaleY 1s infinite ease-in-out',
      },
      keyframes: {
        escaleY: {
          '0%, 80%, 100%': {
            boxShadow: '0 0',
            height: '4em',
          },
          '40%': {
            boxShadow: '0 -2em',
            height: '5em',
          },
        },
      },
    },
  },
  plugins: [],
}