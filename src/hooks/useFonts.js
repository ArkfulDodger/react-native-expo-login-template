import * as Font from "expo-font";
import fonts from "../theme/fonts";

export default useFonts = async () => {
  // load custom fonts asynchronously
  return await Font.loadAsync(fonts.custom);
};
