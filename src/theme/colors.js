const lightTheme = {
  backgroundGradientTop: "#FFFFFF",
  backroundGradientBottom: "#FFE2CD",
};

const lightThemeGradients = {
  backgroundGradient: [
    lightTheme.backgroundGradientTop,
    lightTheme.backroundGradientBottom,
  ],
};

// TODO: set theme to dark if device or app is set to dark theme
export const colors = { ...lightTheme, ...lightThemeGradients };
