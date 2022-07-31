import * as Font from "expo-font";
import fonts from "../theme/fonts";

export default useFonts = async () => {
  const customFonts = {};
  Object.entries(fonts.custom).forEach(([font, requiredPath]) => {
    customFonts[font] = requiredPath;
  });

  return await Font.loadAsync(customFonts);
};
