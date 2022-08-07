import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { List, MD3Colors } from "react-native-paper";
import { styles } from "../../theme/styles";
import { colors } from "../../theme/colors";

const ValidationIcon = ({ isChecked }) => {
  return (
    <List.Icon
      color={isChecked ? "green" : colors.textDefault}
      icon={isChecked ? "checkbox-marked" : "checkbox-blank-outline"}
      style={styles.noPaddingNoMargin}
    />
  );
};

export default ValidationIcon;
