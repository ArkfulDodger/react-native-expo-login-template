import { Button, useTheme } from "react-native-paper";
import { styles } from "../../theme/styles";

const AuthButton = (props) => {
  const { colors } = useTheme();

  return (
    <Button
      {...props}
      mode="contained"
      uppercase={false}
      style={styles.authButton}
      labelStyle={styles.authButtonText}
      theme={{ colors: { primary: colors.submit } }}
    >
      {props.children}
    </Button>
  );
};

export default AuthButton;
