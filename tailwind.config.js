/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white:"#fff",
        background: "#f3f3f3",
      },
      boxShadow: {
        neumorphism:
          "-5px -5px 15px rgba(255, 255, 255, 0.15), 5px 5px 15px rgba(0, 0, 0, 0.35)",
      },
      fontFamily: {
        caveat: ['Caveat', 'cursive'],
      },
  },
  plugins: [],
}
}
