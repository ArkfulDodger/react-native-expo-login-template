// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
import { googleLogo } from "../../utils/logos";
// HOOKS ------------------------------------------------------------
import useGoogleAuth from "../../hooks/useGoogleAuth";
// COMPONENTS -------------------------------------------------------
import AvatarCard from "../atoms/AvatarCard";

const GoogleAuthButton = ({ setUserInfo, text }) => {
  const { googleToken, getGoogleToken } = useGoogleAuth();

  const getUserGoogleData = async () => {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${googleToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  };

  return (
    <AvatarCard
      onPress={
        googleToken
          ? getUserGoogleData
          : () => getGoogleToken({ showInRecents: true })
      }
      image={googleLogo}
      style={styles.authButton}
      textStyle={styles.authButtonText}
    >
      {text}
    </AvatarCard>
  );
};

export default GoogleAuthButton;
