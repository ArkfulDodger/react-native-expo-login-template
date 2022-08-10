// REACT/EXPO -------------------------------------------------------
import { useState } from "react";
import * as WebBrowser from "expo-web-browser";
// CONTAINERS -------------------------------------------------------
import KeyboardAvoidingView from "../containers/KeyboardAvoidingView";
// COMPONENTS -------------------------------------------------------
import TitleImage from "../components/atoms/TitleImage";
import AuthStack from "../navigation/AuthStack";

// allows auth session to complete and return results
WebBrowser.maybeCompleteAuthSession();

const AuthScreen = (props) => {
  const [userInfo, setUserInfo] = useState(null);

  return (
    <KeyboardAvoidingView>
      <TitleImage />
      <AuthStack />
    </KeyboardAvoidingView>
  );
};

export default AuthScreen;
