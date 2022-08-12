import { List } from "react-native-paper";
import { styles } from "../../theme/styles";
import { colors } from "../../theme/colors";
import { useTheme } from "react-native-paper";

const ValidationIcon = ({ isChecked }) => {
  const { colors } = useTheme();
  return (
    <List.Icon
      color={isChecked ? colors.primary : colors.text}
      icon={isChecked ? "checkbox-marked" : "checkbox-blank-outline"}
      style={styles.noPaddingNoMargin}
    />
  );
};

export default ValidationIcon;
