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
        '1.25': '0.3125rem',
        '3.75': '0.9375rem',
        '7.5': '1.875rem',
        '12.5': '3.125rem',
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
          dark: '#606060',
          divider: '#D9DDD5',
          bg: '#F2F4F1'
        },
        support: "#586068"
      },
      fontSize: {
        '1sm': '0.9375rem',
        '8lg': '5.3125rem',
      },
      boxShadow: {
        'card': '0px 3px 3px rgba(0, 0, 0, 0.06)'
      }
    },
  },
  plugins: [],
}
