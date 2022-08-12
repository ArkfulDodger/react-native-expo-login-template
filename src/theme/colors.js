import { DefaultTheme, DarkTheme } from "react-native-paper";

//#region react-native-paper defaults for reference
// DEFAULT LIGHT:
//    primary: "#6200ee"
//    accent: "#03dac4"
//    background: "#f6f6f6"
//    surface: "#ffffff"
//    text: "#000000"
//    disabled: "rgba(0, 0, 0, 0.26)"
//    placeholder: "rgba(0, 0, 0, 0.54)"
//    backdrop: "rgba(0, 0, 0, 0.5)"
//    onSurface: "#000000"
//    notification: "#f50057"
//    error: "#B00020"
//
// DEFAULT DARK:
//    "primary": "#BB86FC",
//    "accent": "#03dac6",
//    "background": "#121212",
//    "surface": "#121212",
//    "text": "#ffffff",
//    "disabled": "rgba(255, 255, 255, 0.38)",
//    "placeholder": "rgba(255, 255, 255, 0.54)",
//    "backdrop": "rgba(0, 0, 0, 0.5)",
//    "onSurface": "#FFFFFF",
//    "notification": "#ff80ab",
//    "error": "#CF6679",
//#endregion

// light theme color palette
const lightMain = {
  backgroundStart: "#FFFFFF",
  backroundEnd: "#FFE2CD",
  backgroundMid: "#FFF0E6", // midway btw gradient top/bottom
  backgroundLight: "#fff6f2", // slightly lighter than midway
  primary: "#8F5D00",
  secondary: "#FAC336",
  submit: "#BC02D9",
  accent: "#00ACB7",

  background: "#f6f6f6", // not customized
  surface: "#ffffff", // not customized
  text: "#000000", // not customized
  disabled: "rgba(0, 0, 0, 0.26)", // not customized
  placeholder: "rgba(0, 0, 0, 0.54)", // not customized
  backdrop: "rgba(0, 0, 0, 0.5)", // not customized
  onSurface: "#000000", // not customized
  notification: "#f50057", // not customized
  error: "#B00020", // not customized
};

// light theme color gradients
const lightGradients = {
  backgroundGradient: [lightMain.backgroundStart, lightMain.backroundEnd],
};

const darkMain = {
  backgroundStart: "#0a063b",
  backroundEnd: "#000000",
  backgroundMid: "#05031e", // midway btw gradient top/bottom
  backgroundLight: "#0d0a36", // slightly lighter than midway
  primary: "#7c75ff",
  secondary: "#5943D8",
  submit: "#C50EE1",
  accent: "#00ACB7",

  background: "#121212", // not customized
  surface: "#121212", // not customized
  text: "#FFFFFF", // not customized
  disabled: "rgba(255, 255, 255, 0.38)", // not customized
  placeholder: "rgba(255, 255, 255, 0.54)", // not customized
  backdrop: "rgba(0, 0, 0, 0.5)", // not customized
  onSurface: "#FFFFFF", // not customized
  notification: "#ff80ab", // not customized
  error: "#CF6679", // not customized
};

const darkGradients = {
  backgroundGradient: [darkMain.backgroundStart, darkMain.backroundEnd],
};

// TODO: set theme to dark if device or app is set to dark theme
export const colors = {
  light: { ...DefaultTheme.colors, ...lightMain, ...lightGradients },
  dark: { ...DarkTheme.colors, ...darkMain, ...darkGradients },
};
