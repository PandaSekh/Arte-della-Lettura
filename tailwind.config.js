module.exports = {
  purge: {
    enabled: true,
    content: [
      "./components/**/*.js",
      "./pages/**/*.js",
      "./pages/*.js",
      "./components/*.js",
      "./components/**/*.ts",
      "./pages/**/*.ts",
      "./pages/*.ts",
      "./components/*.ts",
      "./components/**/*.tsx",
      "./pages/**/*.tsx",
      "./pages/*.tsx",
      "./components/*.tsx",
    ],
    options: {
      keyframes: true,
      fontFace: true,
    },
  },
  darkMode: "class",
  //https://javisperez.github.io/tailwindcolorshades/?lochmara=018fd9
  theme: {
    colors: {
      customBlue: {
        light: "#4db1e4",
        DEFAULT: "#01A2F9",
        // DEFAULT: "#018fd9",
        lighter: "#99d2f0",
        darker: "#016ba3",
      },
      dark: {
        grayText: "#3a3a3a",
        background: "#272727",
        white: "#FFFFFF",
        black: "#000000",
      },
      red: {
        500: "#f56565",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      textColor: ["hover"],
      borderWidth: ["hover"],
      opacity: ["hover"],
      inset: ["dark"],
      translate: ["dark"],
      backgroundOpacity: ["dark"],
      ringWidth: ["hover"],
    },
  },
  corePlugins: {
    animation: false,
  },
};
