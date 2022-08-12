import { View, StyleSheet } from "react-native";
import { useTheme } from "react-native-paper";
import { styles } from "../../theme/styles";

const HorizontalLine = (props) => {
  const { colors } = useTheme();

  return (
    <View
      style={{
        marginHorizontal: props.margin || 0,
        alignSelf: "stretch",
        borderBottomColor: colors.placeholder,
        borderBottomWidth: StyleSheet.hairlineWidth,
      }}
    ></View>
  );
};

export default HorizontalLine;
