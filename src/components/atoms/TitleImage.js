import { Image } from "react-native";
import { styles } from "../../theme/styles";

const TitleImage = (props) => {
  return (
    <Image
      style={styles.titleImage}
      source={require("../../assets/images/worderby-splash.png")}
    />
  );
};

export default TitleImage;
