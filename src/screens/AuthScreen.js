// REACT/EXPO -------------------------------------------------------
import { useState } from "react";
import * as WebBrowser from "expo-web-browser";
// CONTAINERS -------------------------------------------------------
import KeyboardAvoidingView from "../containers/KeyboardAvoidingView";
// COMPONENTS -------------------------------------------------------
import TitleImage from "../components/atoms/TitleImage";
import LoginPage from "../components/pages/LoginPage";
import CreateAccountPage from "../components/pages/CreateAccountPage";

// allows auth session to complete and return results
WebBrowser.maybeCompleteAuthSession();

const AuthScreen = (props) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <KeyboardAvoidingView>
      <TitleImage />
      {/* <LoginPage userInfo={userInfo} setUserInfo={setUserInfo} /> */}
      <CreateAccountPage userInfo={userInfo} setUserInfo={setUserInfo} />
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
