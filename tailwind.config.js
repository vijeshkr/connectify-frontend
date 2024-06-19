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
      // Flex division home page
      flex: {
        '2': '2 2 0%',
        '6': '6 6 0%',
        '3': '3 3 0%',
      },
      height: {
        'h-calc': 'calc(100vh - 50px)'
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.no-scrollbar': {
          'scrollbar-width': 'none', /* Firefox */
          '-ms-overflow-style': 'none', /* Internet Explorer 10+ */
          '&::-webkit-scrollbar': {
            display: 'none', /* Safari and Chrome */
          },
        },
      });
    },
  ],
}