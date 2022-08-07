const lightTheme = {
  backgroundGradientTop: "#FFFFFF",
  backroundGradientBottom: "#FFE2CD",
  splashBackground: "#FFF0E6", // midway btw gradient top/bottom
  inputBackground: "#fff6f2", // slightly lighter than midway
  textDefault: "black",
};

const lightThemeGradients = {
  backgroundGradient: [
    lightTheme.backgroundGradientTop,
    lightTheme.backroundGradientBottom,
  ],
};

// TODO: set theme to dark if device or app is set to dark theme
export const colors = { ...lightTheme, ...lightThemeGradients };
