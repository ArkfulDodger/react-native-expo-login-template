import { useEffect } from "react";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
import { googleLogo } from "../../utils/logos";
// HOOKS ------------------------------------------------------------
import useGoogleAuth from "../../hooks/useGoogleAuth";
// COMPONENTS -------------------------------------------------------
import AvatarCard from "../atoms/AvatarCard";

const GoogleAuthButton = ({
  text,
  onRegistrationSuccess,
  isForRegistration = false,
}) => {
  const { googleToken, getGoogleToken } = useGoogleAuth();

  useEffect(() => {
    if (googleToken) {
      isForRegistration ? attemptRegistration() : attemptLogin();
    }
  }, [googleToken]);

  const attemptRegistration = async () => {
    const data = await getUserGoogleData();
    const userInfo = {
      picture: data.picture,
      username: data.given_name + data.family_name.charAt(0),
      accountType: "google",
      email: data.email,
      firstName: data.given_name,
      lastName: data.family_name,
      isNamePrivate: false,
      theme: "auto",
      avatarSelection: null,
    };
    onRegistrationSuccess(userInfo);
  };

  const attemptLogin = () => {
    console.log("attempting login with token");
  };

  const getUserGoogleData = async () => {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${googleToken}` },
      }
    )
      .then((res) => res.json())
      .catch((error) => console.log(error.message));

    return userInfoResponse;
  };

  return (
    <AvatarCard
      onPress={() => getGoogleToken({ showInRecents: true })}
      image={googleLogo}
      style={styles.authButton}
      textStyle={styles.authButtonText}
    >
      {text}
    </AvatarCard>
  );
};

export default GoogleAuthButton;
