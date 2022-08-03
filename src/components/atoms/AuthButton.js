import { Button } from "react-native-paper";
import { styles } from "../../theme/styles";

const AuthButton = (props) => {
  return (
    <Button
      {...props}
      mode="contained"
      uppercase={false}
      style={styles.authButton}
    >
      {props.children}
    </Button>
  );
};

export default AuthButton;
