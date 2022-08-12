import { Image } from "react-native";
import { styles } from "../../theme/styles";
import { useTheme } from "react-native-paper";

const TitleImage = (props) => {
  const { dark: isDark } = useTheme();

  const titleLight = require("../../assets/images/worderby-splash.png");
  const titleDark = require("../../assets/images/worderby-splash-dark.png");

  return (
    <Image style={styles.titleImage} source={isDark ? titleDark : titleLight} />
  );
};

export default TitleImage;
