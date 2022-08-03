import { TextInput } from "react-native-paper";
import { colors } from "../../theme/colors";
import { styles } from "../../theme/styles";

const AuthInput = (props) => {
  return (
    <TextInput
      {...props}
      mode="outlined"
      style={styles.authInput}
      dense="true"
    />
  );
};

export default AuthInput;
