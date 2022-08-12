import { Platform } from "react-native";
import metrics from "./metrics";

// require all custom fonts
const custom = {
  AppareoExtraLight: require("../assets/fonts/AppareoExtraLight.ttf"),
  AppareoLight: require("../assets/fonts/AppareoLight.ttf"),
  AppareoMedium: require("../assets/fonts/AppareoMedium.ttf"),
  AppareoBlack: require("../assets/fonts/AppareoBlack.ttf"),
  "Teko-Regular": require("../assets/fonts/Teko-Regular.ttf"),
  "Teko-Bold": require("../assets/fonts/Teko-Bold.ttf"),
  "Ubuntu-Bold": require("../assets/fonts/Ubuntu-Bold.ttf"),
  "Ubuntu-Medium": require("../assets/fonts/Ubuntu-Medium.ttf"),
  "Ubuntu-Regular": require("../assets/fonts/Ubuntu-Regular.ttf"),
  "Ubuntu-Light": require("../assets/fonts/Ubuntu-Light.ttf"),
};

// set fonts family to use for specified purpose
const type = {
  // default: Platform.OS === "ios" ? "System" : "Roboto",
  defaultBold: "Ubuntu-Bold",
  defaultMedium: "Ubuntu-Medium",
  default: "Ubuntu-Regular",
  defaultLight: "Ubuntu-Light",
  titleFaded: "AppareoExtraLight",
  titleSemiFade: "AppareoLight",
  titleDefault: "AppareoMedium",
  titleBlack: "AppareoBlack",
  number: "Teko-Bold",
  numberLight: "Teko-Regular",
};

// set actual font size for stated size
const size = {
  font6: metrics.screenWidth * (6 / 365),
  font8: metrics.screenWidth * (8 / 365),
  font10: metrics.screenWidth * (10 / 365),
  font12: metrics.screenWidth * (6 / 365),
  font14: metrics.screenWidth * (14 / 365),
  font16: metrics.screenWidth * (16 / 365),
  font20: metrics.screenWidth * (20 / 365),
  font24: metrics.screenWidth * (24 / 365),
  font28: metrics.screenWidth * (28 / 365),
  font32: metrics.screenWidth * (32 / 365),
  font36: metrics.screenWidth * (36 / 365),
  font40: metrics.screenWidth * (40 / 365),
  font68: metrics.screenWidth * (68 / 365),
};

// set actual font weight for stated weight
const weight = {
  full: "900",
  semi: "600",
  low: "400",
  bold: "bold",
  normal: "normal",
};

export default {
  size,
  weight,
  type,
  custom,
};
