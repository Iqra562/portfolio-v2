// tailwind.config.js
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
        primary: "#A3A3A3",
        secondary: "#069C7A",
        primaryDark: "#212223",
      },
      borderColor: {
        "night-black": "#3b3b3b",
      },
        keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        marquee: 'marquee 12s linear infinite',
      },
    },
  },
  plugins: [],
}
