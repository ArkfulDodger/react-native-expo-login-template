import { List } from "react-native-paper";
import { styles } from "../../theme/styles";
import ValidationIcon from "../atoms/ValidationIcon";

const ValidationListItem = ({ isValid, textTrue, textFalse }) => {
  return (
    <List.Item
      title={isValid ? textTrue : textFalse}
      style={styles.noPaddingNoMargin}
      left={(props) => <ValidationIcon {...props} isValid={isValid} />}
    />
  );
};

export default ValidationListItem;
