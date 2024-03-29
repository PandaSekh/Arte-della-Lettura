module.exports = {
  mode: "jit",
  content: [
      "./components/**/*.tsx",
      "./components/**/**/*.tsx",
      "./pages/**/*.tsx",
      "./pages/*.tsx",
      "./components/*.tsx",
  ],
  //https://javisperez.github.io/tailwindcolorshades/?lochmara=018fd9
  theme: {
    colors: {
      customBlue: {
        light: "#4db1e4",
        DEFAULT: "#01A2F9",
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
        100: "#FEE2E2",
        500: "#f56565",
      },
      screens: {
        md: "768px",
        lg: "1024px",
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      textColor: ["hover"],
      borderWidth: ["hover"],
      opacity: ["hover"],
      ringWidth: ["hover"],
    },
  },
  corePlugins: {
    animation: false,
    accessibility: false,
    backdropBlur: false,
    backdropBrightness: false,
    backdropContrast: false,
    backdropFilter: false,
    backdropGrayscale: false,
    backdropHueRotate: false,
    backdropInvert: false,
    backdropOpacity: false,
    backdropSaturate: false,
    backdropSepia: false,
    sepia: false,
    skew: false,
    space: false,
    saturate: false,
  },
};
