// REACT/EXPO -------------------------------------------------------
import { View } from "react-native";
import { Title } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
import { googleLogo, facebookLogo } from "../../utils/logos";
// COMPONENTS -------------------------------------------------------
import LogoAvatar from "../atoms/LogoAvatar";
// import GoogleLoginButton from "../molecules/GoogleLoginButton";
// import FacebookLoginButton from "../molecules/FacebookLoginButton";
import MidTruncatedText from "../atoms/MidTruncatedText";

const AccountTypeIndicator = ({ userInfo }) => {
  // create default info for dev purposes
  // TODO: remove once in place
  const defaultInfo = {
    email: "hello_user@gmail.com",
    accountType: "google",
    // accountType: "facebook",
    // accountType: "email",
  };
  userInfo = userInfo || defaultInfo;

  const typeBadge = () => {
    switch (userInfo.accountType) {
      case "google":
        return <LogoAvatar image={googleLogo} />;
      case "facebook":
        return <LogoAvatar image={facebookLogo} />;
      default:
        return <MidTruncatedText>{userInfo.email}</MidTruncatedText>;
    }
  };

  return (
    <View style={styles.spreadRow}>
      <View style={styles.fillContainer}>
        <Title>Logged in with:</Title>
      </View>
      <View style={[styles.fillContainer, styles.centered]}>{typeBadge()}</View>
    </View>
  );
};

export default AccountTypeIndicator;
