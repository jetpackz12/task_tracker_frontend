/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        warmWhite: "#FDF4DC",
        warmBlack: "#151515",
        warmBrown: "#7E6551",
      }
    },
    screens: {
      'xxs' : '320px',
      'xs' : '427px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    }
  },
  plugins: [],
}

