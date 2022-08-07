import React, { useState, useEffect } from "react";
import { View, ActivityIndicator } from "react-native";
import ValidationIcon from "../atoms/ValidationIcon";

const ThinkingValidationIcon = ({ isValid, isThinking }) => {
  return (
    <View
      style={{
        marginHorizontal: 0,
        width: 30,
        height: 30,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {isThinking ? (
        <ActivityIndicator />
      ) : (
        <ValidationIcon isValid={isValid} isThinking={isThinking} />
      )}
    </View>
  );
};

export default ThinkingValidationIcon;
