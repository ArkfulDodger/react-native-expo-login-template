import { colors } from "/src/theme/colors";
import { styles } from "/src/theme/styles";
import { Text } from "react-native";

const Text = (props) => {
  return (
    <Text>
      {/* comment */}
      {props.children}
    </Text>
  );
};

export default Text;
