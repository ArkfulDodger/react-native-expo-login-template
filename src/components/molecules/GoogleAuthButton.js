import { useState } from "react";
import useGoogleAuth from "../../hooks/useGoogleAuth";
import AuthButton from "../atoms/AuthButton";

const GoogleAuthButton = ({ setUserInfo }) => {
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
    <AuthButton
      onPress={
        googleToken
          ? getUserGoogleData
          : () => getGoogleToken({ showInRecents: true })
      }
      icon="google"
    >
      {googleToken ? "Get User Data" : "log in"}
    </AuthButton>
  );
};

export default GoogleAuthButton;
