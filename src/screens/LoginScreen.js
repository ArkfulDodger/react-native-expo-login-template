import { styles } from "../theme/styles";
import fonts from "../theme/fonts";
import { Text, Image, Button } from "react-native";
import CenteredContainer from "../containers/CenteredContainer";

// allows auth session to complete and return results
// WebBrowser.maybeCompleteAuthSession();

const LoginScreen = ({
  accessToken,
  getUserData,
  promptAsync,
  showUserInfo,
}) => {
  return (
    <CenteredContainer>
      {showUserInfo()}
      <Button
        title={accessToken ? "Get User Data" : "Login"}
        onPress={
          accessToken ? getUserData : () => promptAsync({ showInRecents: true })
        }
      />
    </CenteredContainer>
  );
};

export default LoginScreen;
