import { List } from "react-native-paper";
import { styles } from "../../theme/styles";
import CheckboxIcon from "../atoms/CheckboxIcon";

const CheckboxListItem = ({
  isChecked,
  textChecked,
  textUnchecked,
  onPress,
}) => {
  return (
    <List.Item
      onPress={onPress}
      title={isChecked ? textChecked : textUnchecked}
      style={styles.noPaddingNoMargin}
      left={(props) => <CheckboxIcon {...props} isChecked={isChecked} />}
    />
  );
};

export default CheckboxListItem;
