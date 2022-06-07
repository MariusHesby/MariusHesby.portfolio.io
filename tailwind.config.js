module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        gobold: ["Gobold", "regular"],
        poppins: ["Poppins", "sans-serif"]
      },
      colors: {
        webGray: "#555555",
        webGrayDark: "#2C2C2C",
        webRed: "#FF0000",
        webRedDark: "#C70000",
        webBrown: "#393939"
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
