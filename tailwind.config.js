module.exports = {
  mode: "jit",
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          orange: '#D28B28',
          green: '#BFFF0B'
        },
        bg: "#F9F1EC"
      }
    },
  },
  plugins: [],
}
