import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { List } from "react-native-paper";
import ValidationIcon from "../atoms/ValidationIcon";
import { styles } from "../../theme/styles";

const ValidationCheck = ({ isValid, textTrue, textFalse }) => {
  return (
    <List.Item
      title={isValid ? textTrue : textFalse}
      style={styles.noPaddingNoMargin}
      left={(props) => <ValidationIcon {...props} isValid={isValid} />}
    />
  );
};

export default ValidationCheck;
