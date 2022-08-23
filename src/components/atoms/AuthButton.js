import { Button, useTheme } from "react-native-paper";
import { styles } from "../../theme/styles";

const AuthButton = (props) => {
  const { colors } = useTheme();

  return (
    <Button
      {...props}
      mode="contained"
      uppercase={false}
      style={props.disabled ? styles.authButtonDisabled : styles.authButton}
      labelStyle={styles.authButtonText}
      theme={{ colors: { primary: colors.focus } }}
    >
      {props.children}
    </Button>
  );
};

export default AuthButton;
