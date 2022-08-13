import { useState } from "react";
import useGoogleAuth from "../../hooks/useGoogleAuth";
import AvatarCard from "../atoms/AvatarCard";
import { styles } from "../../theme/styles";

const GoogleAuthButton = ({ setUserInfo, text }) => {
  const googleLogo = require("../../assets/images/google-logo.png");

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
