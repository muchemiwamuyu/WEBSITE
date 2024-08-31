/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#B8F2E6',
        'surely-blue': '#004AAD',
        'gradient-start': '#8C52FF',
        'gradient-end': '#5CE1E6',
        'custom-section': '#B8F2E6',
        'bluish': '#7161EF',
        backgroundImage: {
          'Hero-pattern': "url('/images/contact.png')",
          
        } 
      },
    },
  },
  plugins: [],
}

