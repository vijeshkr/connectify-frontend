/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        // Custom background images for login and register cards
        'login-bg': "url('./assets/images/login.jpg')",
        'register-bg': "url('./assets/images/register.jpg')",
      },
      colors: {
        // Custom colors for login and register gradient
        'sky-50': 'rgba(125 211, 252, 0.5)',
        'sky-20': 'rgba(125, 211, 252, 0.2)', 
      },
    },
  },
  plugins: [],
}