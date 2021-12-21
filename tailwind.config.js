const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '520px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      spacing: {
        '3.75': '0.9375rem',
        '7.5': '1.875rem',
        '15': '3.75rem',
        '25': '6.25rem',
        '30': '7.5rem',
      },
      colors: {
        accent: {
          orange: '#D28B28',
          green: '#BFFF0B',
          brown: '#98641D'
        },
        bg: "#F9F1EC",
        grey: {
          light: '#E5E5E5',
          dark: '#606060'
        }
      },
      fontSize: {
        '1sm': '0.9375rem',
      },
      boxShadow: {
        'card': '0px 3px 3px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}
