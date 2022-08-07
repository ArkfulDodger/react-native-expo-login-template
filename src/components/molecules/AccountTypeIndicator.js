// REACT/EXPO -------------------------------------------------------
import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Title, Text } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// COMPONENTS -------------------------------------------------------
import GoogleLoginButton from "../molecules/GoogleLoginButton";
import FacebookLoginButton from "../molecules/FacebookLoginButton";
import MidTruncatedText from "../atoms/MidTruncatedText";

const AccountTypeIndicator = ({ userInfo }) => {
  // create default info for dev purposes
  // TODO: remove once in place
  const defaultInfo = {
    email: "hello_user@gmail.com",
    accountType: "email",
    // accountType: "facebook",
    // accountType: "email",
  };
  userInfo = userInfo || defaultInfo;

  const typeBadge = () => {
    switch (userInfo.accountType) {
      case "google":
        return <GoogleLoginButton />;
      case "facebook":
        return <FacebookLoginButton />;
      default:
        return <MidTruncatedText>{userInfo.email}</MidTruncatedText>;
    }
  };

  return (
    <View style={styles.spreadRow}>
      <View style={styles.fillContainer}>
        <Title>Logged in with:</Title>
      </View>
      <View style={styles.fillContainer}>{typeBadge()}</View>
    </View>
  );
};

export default AccountTypeIndicator;
