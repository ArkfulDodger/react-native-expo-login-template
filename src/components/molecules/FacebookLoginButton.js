import AvatarCard from "../atoms/AvatarCard";
import { styles } from "../../theme/styles";
import { facebookLogoSimple as facebookLogo } from "../../utils/logos";

const FacebookAuthButton = ({ text }) => {
  const facebookLogo = require("../../assets/images/facebook-logo-simple.png");

  return (
    <AvatarCard
      onPress={() => console.log("log in with Facebook")}
      image={facebookLogo}
      style={[styles.authButton, { backgroundColor: "#1977F3" }]}
      textStyle={{ ...styles.authButtonText, color: "white" }}
    >
      {text}
    </AvatarCard>
  );
};

export default FacebookAuthButton;
