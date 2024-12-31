/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        LobsterTwo: ["Lobster Two", "serif"],
        Oswald: ["Oswald", "sans-serif"],
        PTSans: ["PT Sans", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}

