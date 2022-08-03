import { styles } from "../../theme/styles";
import { Image } from "react-native";

const TitleImage = (props) => {
  return (
    <Image
      style={styles.titleImage}
      source={require("../../assets/images/worderby-splash.png")}
    />
  );
};

export default TitleImage;
