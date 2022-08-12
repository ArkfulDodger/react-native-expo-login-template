import { Appearance } from "react-native";

export default useSystemTheme = () => {
  const deviceColorScheme = Appearance.getColorScheme();
  console.log(deviceColorScheme);
  return deviceColorScheme === "dark" ? "dark" : "light";
};
