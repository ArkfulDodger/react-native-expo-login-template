import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { List, MD3Colors } from "react-native-paper";
import { styles } from "../../theme/styles";

const ValidationIcon = ({ isValid }) => {
  return (
    <List.Icon
      color={isValid ? "green" : "red"}
      icon={isValid ? "check-bold" : "exclamation-thick"}
      style={styles.noPaddingNoMargin}
    />
  );
};

export default ValidationIcon;
