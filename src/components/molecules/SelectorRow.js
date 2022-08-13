// REACT/EXPO -------------------------------------------------------
import { useState, useEffect } from "react";
import { View } from "react-native";
// EXTERNAL ---------------------------------------------------------
import { Title } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// COMPONENTS -------------------------------------------------------
import SelectorButton from "../atoms/SelectorButton";

const SelectorRow = ({ label, options, defaultOption, onChange }) => {
  const [selection, setSelection] = useState(defaultOption || options[0]);

  // when selection changes, call onChange
  useEffect(() => {
    if (onChange) {
      onChange(selection);
    }
  }, [selection]);

  const selectorButtons = [];
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    selectorButtons.push(
      <SelectorButton
        key={i}
        value={option}
        selection={selection}
        setSelection={setSelection}
      />
    );
  }

  return (
    <View style={styles.spreadRow}>
      {label && <Title>{label}</Title>}
      {selectorButtons}
    </View>
  );
};

export default SelectorRow;
