// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
import { facebookLogoSimple as facebookLogo } from "../../utils/logos";
// HOOKS ------------------------------------------------------------
import useFacebookAuth from "../../hooks/useFacebookAuth";
// COMPONENTS -------------------------------------------------------
import AvatarCard from "../atoms/AvatarCard";

const FacebookAuthButton = ({ setUserInfo, text }) => {
  const { facebookToken, getFacebookToken } = useFacebookAuth();

  const getUserFacebookData = async () => {
    console.log("getting user facebook data with token");
  };

  return (
    <AvatarCard
      onPress={() => getFacebookToken({ showInRecents: true })}
      image={facebookLogo}
      style={[styles.authButton, { backgroundColor: "#1977F3" }]}
      textStyle={{ ...styles.authButtonText, color: "white" }}
    >
      {text}
    </AvatarCard>
  );
};

export default FacebookAuthButton;
