import { useState } from "react";
import useGoogleAuth from "../../hooks/useGoogleAuth";
import AuthButton from "../atoms/AuthButton";
import AvatarCard from "../atoms/AvatarCard";
import { styles } from "../../theme/styles";

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
    <AvatarCard style={styles.authButton} textStyle={styles.authButtonText}>
      log in
    </AvatarCard>
    // <AuthButton
    //   onPress={
    //     googleToken
    //       ? getUserGoogleData
    //       : () => getGoogleToken({ showInRecents: true })
    //   }
    //   icon="google"
    // >
    //   {text && text}
    // </AuthButton>
  );
};

export default GoogleAuthButton;
