// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
import { facebookLogoSimple as facebookLogo } from "../../utils/logos";
// HOOKS ------------------------------------------------------------
import useFacebookAuth from "../../hooks/useFacebookAuth";
// COMPONENTS -------------------------------------------------------
import OAuthButton from "../molecules/OAuthButton";

const FacebookAuthButton = ({
  text,
  onRegistrationSuccess,
  isForRegistration = false,
}) => {
  const fetchFacebookData = async (token) => {
    return fetch(
      `https://graph.facebook.com/me?access_token=${token}&fields=first_name,last_name,picture{url},id,email`
    );
  };

  const convertFacebookDataToInfo = (data) => {
    return {
      picture: data.picture.data.url,
      username: data.first_name + data.last_name.charAt(0),
      accountType: "facebook",
      email: data.email,
      firstName: data.first_name,
      lastName: data.last_name,
      isNamePrivate: false,
      theme: "auto",
      avatarSelection: null,
    };
  };

  return (
    <OAuthButton
      text={text}
      onRegistrationSuccess={onRegistrationSuccess}
      isForRegistration={isForRegistration}
      logo={facebookLogo}
      useAuthToken={useFacebookAuth}
      fetchData={fetchFacebookData}
      convertUserDataToInfo={convertFacebookDataToInfo}
      buttonStyle={[styles.authButton, { backgroundColor: "#1977F3" }]}
      textStyle={{ ...styles.authButtonText, color: "white" }}
    />
  );
};

export default FacebookAuthButton;
