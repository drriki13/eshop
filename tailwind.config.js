/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary: '#10B981',
      gray: '#E4EAEF',
      black: '#052E31'
    },
    screens: {
      'sm': '768px',
      'md': '1024px',
      'lg': '1440px',
      '2lg': '1920px',
    },
    extend: {},
  },
  plugins: [],
}

