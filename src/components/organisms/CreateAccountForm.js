// REACT/EXPO -------------------------------------------------------
import React, { useState, useEffect } from "react";
import { View } from "react-native";
// SYSTEM -----------------------------------------------------------
import { isValidEmail, updateBoolStateConditionally } from "../../utils/utils";
// COMPONENTS -------------------------------------------------------
import AuthButton from "../atoms/AuthButton";
import AuthInput from "../atoms/AuthInput";
import PasswordValidations from "./PasswordValidations";
import SecureInput from "../molecules/SecureInput";

const CreateAccountForm = (props) => {
  // Input States
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [confirmPasswordInput, setConfirmPasswordInput] = useState("");

  // Validation States
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isPasswordValid, setIsPasswordValid] = useState(false);
  const [isFormSubmittable, setIsFormSubmittable] = useState(false);

  // check/update email validation when email is edited
  useEffect(() => {
    updateBoolStateConditionally({
      state: isEmailValid,
      setter: setIsEmailValid,
      conditions: isValidEmail(emailInput),
    });
  }, [emailInput]);

  // check/update whether form can be submitted when validations update
  useEffect(() => {
    updateBoolStateConditionally({
      state: isFormSubmittable,
      setter: setIsFormSubmittable,
      conditions: [isPasswordValid, isEmailValid],
    });
  }, [isPasswordValid, isEmailValid]);

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
        <SecureInput
          label="confirm password"
          value={confirmPasswordInput}
          onChangeText={(text) => setConfirmPasswordInput(text)}
        />
        <PasswordValidations
          isPasswordValid={isPasswordValid}
          setIsPasswordValid={setIsPasswordValid}
          passwordInput={passwordInput}
          confirmPasswordInput={confirmPasswordInput}
        />
      </View>
      <AuthButton
        disabled={!isFormSubmittable}
        onPress={() => console.log("log in pressed")}
      >
        submit
      </AuthButton>
    </>
  );
};

export default CreateAccountForm;
