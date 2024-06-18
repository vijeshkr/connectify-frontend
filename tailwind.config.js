/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-bg': "url('./src/assets/images/login.jpg')",
      },
      colors: {
        'sky-50': 'rgba(125 211, 252, 0.5)',
        'sky-20': 'rgba(125, 211, 252, 0.2)', 
      },
    },
  },
  plugins: [],
}