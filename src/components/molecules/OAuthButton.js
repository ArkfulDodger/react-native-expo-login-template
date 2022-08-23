import { useEffect } from "react";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// COMPONENTS -------------------------------------------------------
import AvatarCard from "../atoms/AvatarCard";

const OAuthButton = ({
  text,
  onRegistrationSuccess,
  isForRegistration,
  logo,
  useAuthToken,
  fetchData,
  convertUserDataToInfo,
  buttonStyle = styles.authButton,
  textStyle = styles.authButtonText,
}) => {
  const [accessToken, getAccessToken] = useAuthToken();

  useEffect(() => {
    if (accessToken) {
      isForRegistration ? attemptRegistration() : attemptLogin();
    }
  }, [accessToken]);

  const attemptRegistration = async () => {
    const userInfo = await getUserInfo();
    if (userInfo) {
      onRegistrationSuccess(userInfo);
    }
  };

  const attemptLogin = () => {
    console.log("attempting login with token");
  };

  const getUserInfo = async () => {
    let userInfoResponse = await fetchData(accessToken)
      .then((res) => res.json())
      .then((data) => convertUserDataToInfo(data))
      .catch((error) => console.log(error.message));

    return userInfoResponse;
  };

  return (
    <AvatarCard
      onPress={() => getAccessToken({ showInRecents: true })}
      image={logo}
      style={buttonStyle}
      textStyle={textStyle}
    >
      {text}
    </AvatarCard>
  );
};

export default OAuthButton;
