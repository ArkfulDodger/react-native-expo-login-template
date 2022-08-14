import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { styles } from "../../theme/styles";
import GoogleLoginButton from "../molecules/GoogleLoginButton";
import FacebookLoginButton from "../molecules/FacebookLoginButton";

const OauthCreateAccountMenu = ({ goToFinalizeAccount }) => {
  return (
    <View style={styles.spacedRow}>
      <GoogleLoginButton
        onRegistrationSuccess={goToFinalizeAccount}
        isForRegistration={true}
      />
      <FacebookLoginButton
        onRegistrationSuccess={goToFinalizeAccount}
        isForRegistration={true}
      />
    </View>
  );
};

export default OauthCreateAccountMenu;
