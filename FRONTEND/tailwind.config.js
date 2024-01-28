/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

export default {
  
  content: [
    "./index.html",
    "./App.jsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
  ],
  variants: {
    extend: {
      visibility: ['responsive', 'hover', 'focus', 'group-hover'],
    },
  },
}