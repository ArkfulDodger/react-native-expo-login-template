import useCombinedThemes from "../hooks/useCombinedThemes";

// combined theme defaults from react navigation and react native paper
const { CombinedDefaultTheme, CombinedDarkTheme } = useCombinedThemes();

//#region Combined Theme defaults for reference

// DEFAULT LIGHT:
// "primary": "rgb(0, 122, 255)",
// "accent": "#03dac4",
// "background": "rgb(242, 242, 242)",
// "surface": "#ffffff",
// "text": "rgb(28, 28, 30)",
// "disabled": "rgba(0, 0, 0, 0.26)",
// "placeholder": "rgba(0, 0, 0, 0.54)",
// "backdrop": "rgba(0, 0, 0, 0.5)",
// "onSurface": "#000000",
// "notification": "rgb(255, 59, 48)",
// "error": "#B00020",
// "border": "rgb(216, 216, 216)",
// "card": "rgb(255, 255, 255)",

// DEFAULT DARK:
// "primary": "rgb(10, 132, 255)",
// "accent": "#03dac6",
// "background": "rgb(1, 1, 1)",
// "surface": "#121212",
// "text": "rgb(229, 229, 231)",
// "disabled": "rgba(255, 255, 255, 0.38)",
// "placeholder": "rgba(255, 255, 255, 0.54)",
// "backdrop": "rgba(0, 0, 0, 0.5)",
// "onSurface": "#FFFFFF",
// "notification": "rgb(255, 69, 58)",
// "error": "#CF6679",
// "border": "rgb(39, 39, 41)",
// "card": "rgb(18, 18, 18)",

// RN-PAPER LIGHT - Variants:
//    primary: "#6200ee"
//    background: "#f6f6f6"
//    text: "#000000"
//    notification: "#f50057"
//
// RN-PAPER DARK - Variants:
//    "primary": "#BB86FC",
//    "background": "#121212",
//    "text": "#ffffff",
//    "notification": "#ff80ab",
//#endregion

// light theme color palette
const lightMain = {
  background: "transparent",
  backgroundStart: "#FFFFFF",
  backroundEnd: "#FFE2CD",
  backgroundMid: "#FFF0E6", // midway btw gradient top/bottom
  backgroundLight: "#fff6f2", // slightly lighter than midway
  primary: "#8F5D00",
  secondary: "#FAC336",
  focus: "#BC02D9",
  accent: "#00ACB7",
};

// light theme color gradients
const lightGradients = {
  backgroundGradient: [lightMain.backgroundStart, lightMain.backroundEnd],
};

// dark theme color palette
const darkMain = {
  background: "transparent",
  backgroundStart: "#0a063b",
  backroundEnd: "#000000",
  backgroundMid: "#05031e", // midway btw gradient top/bottom
  backgroundLight: "#0d0a36", // slightly lighter than midway
  primary: "#7c75ff",
  secondary: "#5943D8",
  focus: "#C50EE1",
  accent: "#00ACB7",
};

// dark theme color gradients
const darkGradients = {
  backgroundGradient: [darkMain.backgroundStart, darkMain.backroundEnd],
};

export const colors = {
  light: { ...CombinedDefaultTheme.colors, ...lightMain, ...lightGradients },
  dark: { ...CombinedDarkTheme.colors, ...darkMain, ...darkGradients },
};
