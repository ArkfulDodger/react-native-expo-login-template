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

const AccountTypeIndicator = ({ accountType }) => {
  const typeBadge = () => {
    switch (accountType) {
      case "google":
        return <LogoAvatar image={googleLogo} />;
      case "facebook":
        return <LogoAvatar image={facebookLogo} />;
      case "email":
        return <Title>email</Title>;
      default:
        console.error("account type not parsed");
        return null;
    }
  };

  return (
    <View style={styles.spreadRow}>
      <View style={styles.fillContainer}>
        <Title>Signing up with:</Title>
      </View>
      <View style={[styles.fillContainer]}>{typeBadge()}</View>
    </View>
  );
};

export default AccountTypeIndicator;
