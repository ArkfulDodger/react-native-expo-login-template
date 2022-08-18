// REACT/EXPO -------------------------------------------------------
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import { HelperText } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// COMPONENTS -------------------------------------------------------
import AuthInput from "../atoms/AuthInput";
import ThinkingValidationIcon from "../molecules/ThinkingValidationIcon";

const DisplayNameEditable = ({
  username,
  setUsername,
  isUsernameAvailable: isAvailable,
  setIsUsernameAvailable: setIsAvailable,
}) => {
  //TODO: Add Helper Text for status indication

  // input state
  const [isThinking, setIsThinking] = useState(false);
  const [nextCheckTimeoutId, setNextCheckTimeoutId] = useState();
  const [devLoadTimeoutId, setDevLoadTimeoutId] = useState();

  const verifyUsernameAvailability = async () => {
    clearTimeout(nextCheckTimeoutId);
    clearTimeout(devLoadTimeoutId);
    setIsThinking(true);

    // TODO: put actual verification fetch call to server
    // Dev timer and auto-approval
    setDevLoadTimeoutId(
      setTimeout(() => {
        setIsThinking(false);
        setIsAvailable(false);
      }, 100)
    );
  };

  const onChangeText = (text) => {
    setIsThinking(true);
    setIsAvailable(false);
    setUsername(text);

    // verify the username if idle for 1.5 seconds
    clearTimeout(nextCheckTimeoutId);
    setNextCheckTimeoutId(
      setTimeout(() => {
        verifyUsernameAvailability();
      }, 1500)
    );
  };

  return (
    <View style={{ alignSelf: "stretch" }}>
      <View style={styles.row}>
        <View style={styles.fillContainer}>
          <AuthInput
            label={"username"}
            value={username}
            onChangeText={onChangeText}
            onBlur={isThinking && verifyUsernameAvailability}
          />
        </View>
        <ThinkingValidationIcon isValid={isAvailable} isThinking={isThinking} />
      </View>
      <HelperText type={isThinking || isAvailable ? "info" : "error"}>
        {isThinking
          ? "checking availability"
          : isAvailable
          ? "username is available!"
          : "username is not available!"}
      </HelperText>
    </View>
  );
};

export default DisplayNameEditable;
