import { Avatar } from "react-native-paper";
import { styles } from "../../theme/styles";

const LogoAvatar = ({ image, size }) => {
  return (
    <Avatar.Image
      size={size || 30}
      style={styles.buttonAvatarImage}
      source={image}
    />
  );
};

export default LogoAvatar;
