import { DefaultTheme } from "react-native-paper";

//#region DefaultTheme colors for reference
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
  background: "#090909",
  surface: "#000000",
  text: "#FFFFFF",
  disabled: "rgba(255, 255, 255, 0.26)",
  placeholder: "rgba(255, 255, 255, 0.54)",
  backdrop: "rgba(255, 255, 255, 0.5)",
  onSurface: "#FFFFFF",
  notification: "#f50057",
  error: "#B00020",
};

const darkGradients = {
  backgroundGradient: [darkMain.backgroundStart, darkMain.backroundEnd],
};

// TODO: set theme to dark if device or app is set to dark theme
export const colors = {
  light: { ...DefaultTheme.colors, ...lightMain, ...lightGradients },
  dark: { ...DefaultTheme.colors, ...darkMain, ...darkGradients },
};
