import { useEffect, useCallback } from "react";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
import { facebookLogoSimple as facebookLogo } from "../../utils/logos";
// HOOKS ------------------------------------------------------------
import useFacebookAuth from "../../hooks/useFacebookAuth";
// COMPONENTS -------------------------------------------------------
import AvatarCard from "../atoms/AvatarCard";

const FacebookAuthButton = ({
  text,
  onRegistrationSuccess,
  isForRegistration = false,
}) => {
  const { facebookToken, getFacebookToken } = useFacebookAuth();

  useEffect(() => {
    if (facebookToken) {
      isForRegistration ? attemptRegistration() : attemptLogin();
    }
  }, [facebookToken]);

  const attemptRegistration = async () => {
    const data = await getUserFacebookData();
    const userInfo = {
      picture: data.picture.data.url,
      username: data.first_name + data.last_name.charAt(0),
      accountType: "facebook",
      email: null,
      firstName: data.first_name,
      lastName: data.last_name,
      isNamePrivate: false,
    };
    onRegistrationSuccess(userInfo);
  };

  const attemptLogin = () => {
    console.log("attempting login with token");
  };

  const getUserFacebookData = async () => {
    let userInfoResponse = await fetch(
      `https://graph.facebook.com/me?access_token=${facebookToken}&fields=first_name,last_name,picture{url},id`
    )
      .then((res) => res.json())
      .catch((error) => console.log(error.message));

    return userInfoResponse;
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
