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
    },
  },
  plugins: [],
}
