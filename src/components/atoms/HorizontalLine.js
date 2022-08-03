import { View, StyleSheet } from "react-native";
import { styles } from "../../theme/styles";

const HorizontalLine = (props) => {
  return (
    <View
      style={{
        marginHorizontal: props.margin || 0,
        alignSelf: "stretch",
        borderBottomColor: "black",
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    ></View>
  );
};

export default HorizontalLine;
