// REACT/EXPO -------------------------------------------------------
import { View } from "react-native";
// EXTERNAL ---------------------------------------------------------
import { Headline, Button } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// CONTAINERS -------------------------------------------------------
import PageContainer from "../../containers/PageContainer";
// COMPONENTS -------------------------------------------------------
import FacebookAuthButton from "../molecules/FacebookAuthButton";
import GoogleAuthButton from "../molecules/GoogleAuthButton";
import HorizontalLine from "../atoms/HorizontalLine";
import LoginForm from "../organisms/LoginForm";
import UserInfoDisplay from "../molecules/UserInfoDisplay";

const LoginPage = ({ userInfo, setUserInfo }) => {
  return (
    <PageContainer>
      <View style={styles.spreadColumn}>
        {userInfo && <UserInfoDisplay userInfo={userInfo} />}
        <Headline>Log In</Headline>
        <LoginForm />
        <HorizontalLine />
        <GoogleAuthButton setUserInfo={setUserInfo} />
        <FacebookAuthButton />
        <View>
          <Button>create account</Button>
          <Button>forgot password?</Button>
        </View>
      </View>
    </PageContainer>
  );
};

export default LoginPage;
