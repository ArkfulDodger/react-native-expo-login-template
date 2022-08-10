import { List } from "react-native-paper";
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
