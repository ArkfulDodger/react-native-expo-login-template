import React, { useState } from "react";
import { View } from "react-native";
import AuthInput from "../atoms/AuthInput";
import AuthButton from "../atoms/AuthButton";
import SecureInput from "../molecules/SecureInput";

const LoginForm = (props) => {
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");

  return (
    <>
      <View style={{ alignSelf: "stretch" }}>
        <AuthInput
          label="email"
          value={emailInput}
          onChangeText={(text) => setEmailInput(text)}
        />
        <SecureInput
          label="password"
          value={passwordInput}
          onChangeText={(text) => setPasswordInput(text)}
        />
      </View>
      <AuthButton onPress={() => console.log("log in pressed")}>
        log in
      </AuthButton>
    </>
  );
};

export default LoginForm;
