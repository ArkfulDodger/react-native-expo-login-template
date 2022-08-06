// REACT/EXPO -------------------------------------------------------
import { View } from "react-native";
// EXTERNAL ---------------------------------------------------------
import { Headline, Button } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// CONTAINERS -------------------------------------------------------
import PageContainer from "../../containers/PageContainer";
// COMPONENTS -------------------------------------------------------
import FacebookLoginButton from "../molecules/FacebookLoginButton";
import GoogleLoginButton from "../molecules/GoogleLoginButton";
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
        <GoogleLoginButton setUserInfo={setUserInfo} text="log in" />
        <FacebookLoginButton text="log in" />
        <View>
          <Button>create account</Button>
          <Button>forgot password?</Button>
        </View>
      </View>
    </PageContainer>
  );
};

export default LoginPage;
