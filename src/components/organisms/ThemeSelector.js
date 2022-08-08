import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Title } from "react-native-paper";
import { styles } from "../../theme/styles";
// import SelectorRow from "../molecules/SelectorRow";
import SelectorButton from "../atoms/SelectorButton";

const ThemeSelector = (props) => {
  const [selection, setSelection] = useState("auto");

  return (
    <View style={styles.spreadRow}>
      <Title>Theme:</Title>
      <SelectorButton
        value="auto"
        selection={selection}
        setSelection={setSelection}
      />
      <SelectorButton
        value="light"
        selection={selection}
        setSelection={setSelection}
      />
      <SelectorButton
        value="dark"
        selection={selection}
        setSelection={setSelection}
      />
    </View>

    // <SelectorButton.Row
    //   label="theme:"
    //   onSelectionChange={(value) => setSelection(value)}
    // >
    //   <SelectorButton value="auto" text="auto" />
    //   <SelectorButton value="light" text="light" />
    //   <SelectorButton value="dark" text="dark" />
    // </SelectorButton.Row>
  );
};

export default ThemeSelector;
