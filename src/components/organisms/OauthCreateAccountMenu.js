import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "../../theme/styles";
import GoogleLoginButton from "../molecules/GoogleLoginButton";
import FacebookLoginButton from "../molecules/FacebookLoginButton";

const OauthCreateAccountMenu = (props) => {
  return (
    <View style={styles.centeredRow}>
      <GoogleLoginButton />
      <FacebookLoginButton />
    </View>
  );
};

export default OauthCreateAccountMenu;
