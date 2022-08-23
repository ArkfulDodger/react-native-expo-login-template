// REACT/EXPO -------------------------------------------------------
import { View } from "react-native";
// EXTERNAL ---------------------------------------------------------
import { Headline } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// CONTAINERS -------------------------------------------------------
import PageContainer from "../../containers/PageContainer";
// COMPONENTS -------------------------------------------------------
import FacebookLoginButton from "../molecules/FacebookLoginButton";
import GoogleLoginButton from "../molecules/GoogleLoginButton";
import HorizontalLine from "../atoms/HorizontalLine";
import LoginForm from "../organisms/LoginForm";
import TextButton from "../atoms/TextButton";
import UserInfoDisplay from "../molecules/UserInfoDisplay";

const LoginPage = ({ userInfo, setUserInfo, navigation }) => {
  // TODO: handle forgot passoword button behavior

  return (
    <PageContainer>
      <View style={styles.spreadColumn}>
        <Headline>Log In</Headline>
        <LoginForm />
        <HorizontalLine />
        <GoogleLoginButton text="log in" />
        <FacebookLoginButton text="log in" />
        <View>
          <TextButton
            fontSize={20}
            onPress={() => navigation.navigate("Create Account")}
          >
            create account
          </TextButton>
          <TextButton
            fontSize={14}
            onPress={() => console.log("forgot password pressed")}
          >
            forgot password?
          </TextButton>
        </View>
      </View>
    </PageContainer>
  );
};

export default LoginPage;
