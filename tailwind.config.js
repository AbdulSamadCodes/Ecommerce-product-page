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
        "dark-grayish-blue" : "hsl(219, 9%, 45%)",
        "very-dark-blue": "hsl(220, 13%, 13%)",
        "black_75" : "hsla(0,0%,0%,0.75)",
        "light-grayish-blue": "hsl(223, 64%, 98%)",   
        "orange-primary": "hsl(26, 100%, 55%)",
        "pale-orange":" hsl(25, 100%, 94%)"
      },
      screens: {
        "xs": "375px",
        "sm": "575px",

        "md": "768px",
        "lg": "992px",
        "xl": "1100px"
      },
      borderWidth:{
        1:"1px"
      },
      
      gridTemplateColumns:{
        dashboard:"40% 60%"
      }
    },
  },
  plugins: [],
}

