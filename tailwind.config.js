module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      gray: {
        50: "#fafafa",
        100: "#f5f5f5",
        200: "#e5e5e5",
        300: "#d4d4d4",
        400: "#a3a3a3",
        500: "#737373",
        600: "#525252",
        700: "#404040",
        800: "#262626",
        900: "#171717",
      },
      primary: {
        50: "#eff3ff",
        100: "#edf1ff",
        200: "#e1e8ff",
        300: "#aec0ff",
        400: "#88a2ff",
        500: "#5c81ff",
        600: "#3765ff",
        700: "#1f48da",
        800: "#0f38ca",
        900: "#00239e",
      },
    },
    extend: {
      boxShadow: {
        md: "0 1.63px 6.52px 0 rgba(5, 12, 44, 0.5)"
      }
    },
  },
  plugins: [],
};