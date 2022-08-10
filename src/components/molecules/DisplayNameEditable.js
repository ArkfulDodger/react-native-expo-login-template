// REACT/EXPO -------------------------------------------------------
import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// COMPONENTS -------------------------------------------------------
import AuthInput from "../atoms/AuthInput";
import ThinkingValidationIcon from "../molecules/ThinkingValidationIcon";

const DisplayNameEditable = ({ userInfo }) => {
  //TODO: Add Helper Text for status indication

  // create default info for dev purposes
  // TODO: remove once in place
  const defaultInfo = {
    username: "NoahR",
  };
  userInfo = userInfo || defaultInfo;

  // input state
  const [displayNameInput, setDisplayNameInput] = useState(userInfo.username);
  const [isThinking, setIsThinking] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);
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
      }, 2000)
    );
  };

  const onChangeText = (text) => {
    setIsThinking(true);
    setDisplayNameInput(text);

    // verify the username if idle for 1.5 seconds
    clearTimeout(nextCheckTimeoutId);
    setNextCheckTimeoutId(
      setTimeout(() => {
        verifyUsernameAvailability();
      }, 1500)
    );
  };

  return (
    <View style={styles.row}>
      <View style={styles.fillContainer}>
        <AuthInput
          label={"display name"}
          value={displayNameInput}
          onChangeText={onChangeText}
          onBlur={isThinking && verifyUsernameAvailability}
        />
      </View>
      <ThinkingValidationIcon isValid={isAvailable} isThinking={isThinking} />
    </View>
  );
};

export default DisplayNameEditable;
