/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "grayish-blue": "hsl(220, 14%, 75%)",
        "dark-grayish-blue" : "hsl(219, 9%, 45%)"
      },
      screens: {
        "xs": "375px",
        "sm": "575px",
        "md": "768px",
        "lg": "992px",
        "xl": "1100px"
      }
    },
  },
  plugins: [],
}

