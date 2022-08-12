import { Appearance } from "react-native";

export default useSystemTheme = () => {
  const deviceColorScheme = Appearance.getColorScheme();

  return deviceColorScheme === "dark" ? "darkTheme" : "lightTheme";
};
