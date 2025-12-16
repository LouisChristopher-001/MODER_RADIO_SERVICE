export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0E2A4F",
        accent: "#CC9552",
        warmGray: "#707070",
        bgWhite: "#F9FAFB",
      },
      boxShadow: {
        card: "0 10px 25px rgba(14, 42, 79, 0.1)",
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, rgba(14,42,79,0.9) 0%, rgba(14,42,79,0.6) 50%, rgba(197,155,66,0.2) 100%)',
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      perspective: {
        '1000': '1000px',
      },
    },
  },
  plugins: [],
};