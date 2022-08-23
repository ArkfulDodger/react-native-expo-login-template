// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
import { googleLogo } from "../../utils/logos";
// HOOKS ------------------------------------------------------------
import useGoogleAuth from "../../hooks/useGoogleAuth";
// COMPONENTS -------------------------------------------------------
import OAuthButton from "./OAuthButton";

const GoogleAuthButton = ({
  text,
  onRegistrationSuccess,
  isForRegistration = false,
}) => {
  const fetchGoogleData = async (token) => {
    return fetch("https://www.googleapis.com/userinfo/v2/me", {
      headers: { Authorization: `Bearer ${token}` },
    });
  };

  convertGoogleDataToInfo = (data) => {
    return {
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
  };

  return (
    <OAuthButton
      text={text}
      onRegistrationSuccess={onRegistrationSuccess}
      isForRegistration={isForRegistration}
      logo={googleLogo}
      useAuthToken={useGoogleAuth}
      fetchData={fetchGoogleData}
      convertUserDataToInfo={convertGoogleDataToInfo}
    />
  );
};

export default GoogleAuthButton;
