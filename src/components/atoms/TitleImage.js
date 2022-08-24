import { Image, View } from "react-native";
import { styles } from "../../theme/styles";
import { useTheme } from "react-native-paper";

const TitleImage = (props) => {
  const { dark: isDark } = useTheme();

  const titleLight = require("../../assets/images/demo-splash.png");
  const titleDark = require("../../assets/images/demo-splash.png");

  return (
    <Image
      resizeMode="contain"
      style={styles.titleImage}
      source={isDark ? titleDark : titleLight}
    />
  );
};

export default TitleImage;
