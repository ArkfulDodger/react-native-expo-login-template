// REACT/EXPO -------------------------------------------------------
import { useState } from "react";
import * as WebBrowser from "expo-web-browser";
// CONTAINERS -------------------------------------------------------
import KeyboardAvoidingView from "../containers/KeyboardAvoidingView";
// COMPONENTS -------------------------------------------------------
import TitleImage from "../components/atoms/TitleImage";
import LoginPage from "../components/pages/LoginPage";

// allows auth session to complete and return results
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = (props) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <KeyboardAvoidingView>
      <TitleImage />
      <LoginPage userInfo={userInfo} setUserInfo={setUserInfo} />
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
