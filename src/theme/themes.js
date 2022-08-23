import { colors } from "./colors";
import fonts from "./fonts";
import useCombinedThemes from "../hooks/useCombinedThemes";

// combined theme defaults from react navigation and react native paper
const { CombinedDefaultTheme, CombinedDarkTheme } = useCombinedThemes();

//#region Combined Theme defaults for reference

// DEFAULT THEME:
// "dark": false,
// "roundness": 4,
// "animation": {
//   "scale": 1,
// },
// "colors": // colors ref in color file
// "fonts": {
//   "medium": {
//     "fontFamily": "System",
//     "fontWeight": "500",
//   },
//   "regular": {
//     "fontFamily": "System",
//     "fontWeight": "400",
//   },
//   "light": {
//     "fontFamily": "System",
//     "fontWeight": "300",
//   },
//   "thin": {
//     "fontFamily": "System",
//     "fontWeight": "100",
//   },
// },

// DARK THEME
// "dark": true,
// "mode": "adaptive",
// "roundness": 4,
// "animation": {
//   "scale": 1,
// },
// "colors": // colors ref in color file
// "fonts": {
//   "medium": {
//     "fontFamily": "System",
//     "fontWeight": "500",
//   },
//   "regular": {
//     "fontFamily": "System",
//     "fontWeight": "400",
//   },
//   "light": {
//     "fontFamily": "System",
//     "fontWeight": "300",
//   },
//   "thin": {
//     "fontFamily": "System",
//     "fontWeight": "100",
//   },
// },

//#endregion

// settings to apply across all themes
const universalSettings = {
  roundness: 10,
  fonts: {
    medium: {
      fontFamily: fonts.type.defaultMedium,
    },
    regular: {
      fontFamily: fonts.type.default,
    },
    light: {
      fontFamily: fonts.type.defaultLight,
    },
    thin: {
      fontFamily: fonts.type.default,
    },
  },
  // animation: not yet defined or changed from default
};

const lightTheme = {
  ...CombinedDefaultTheme,
  ...universalSettings,
  dark: false,
  colors: colors.light,
};

const darkTheme = {
  ...CombinedDarkTheme,
  ...universalSettings,
  dark: true,
  mode: "adaptive",
  colors: colors.dark,
};

export const themes = {
  lightTheme,
  darkTheme,
};
