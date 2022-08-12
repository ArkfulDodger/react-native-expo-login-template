import { DefaultTheme } from "react-native-paper";
import { styles } from "./styles";
import { colors } from "./colors";
import fonts from "./fonts";

const paperDefaultReference = {
  dark: false,
  // mode not listed
  roundness: 4,
  colors: {
    primary: "#6200ee",
    accent: "#03dac4",
    background: "#f6f6f6",
    surface: "#ffffff",
    text: "#000000",
    disabled: "rgba(0, 0, 0, 0.26)",
    placeholder: "rgba(0, 0, 0, 0.54)",
    backdrop: "rgba(0, 0, 0, 0.5)",
    onSurface: "#000000",
    notification: "#f50057",
    error: "#B00020",
  },
  fonts: {
    regular: {
      fontFamily: "sans-serif",
      fontWeight: "normal",
    },
    medium: {
      fontFamily: "sans-serif-medium",
      fontWeight: "normal",
    },
    light: {
      fontFamily: "sans-serif-light",
      fontWeight: "normal",
    },
    thin: {
      fontFamily: "sans-serif-thin",
      fontWeight: "normal",
    },
  },
  animation: {
    scale: 1,
  },
};

const universalTheme = {
  ...DefaultTheme,
  roundness: 4,
  // fonts
  // animation
};

const light = {
  ...universalTheme,
  dark: false,
  colors: colors.light,
};

const dark = {
  ...universalTheme,
  dark: true,
  mode: "adaptive",
  colors: colors.dark,
};

export const themes = {
  light,
  dark,
};
