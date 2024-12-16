/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/**/*.{html,js}",
  ],
  
  theme: {
    extend: {
      colors:{
        'gold': '#D39C32',
        'gold-bg': '#FFFAD7',
        'gold-bg-dark': '#F2E4CA',
        'gold-dark': '#AC802D',
        'silver': '#D9D9D9',
        
      
      }
    },
    fontFamily:{
      sans: ['Poppins', 'sans-serif'],
    }
  },
  plugins: [
    
  ],
}

