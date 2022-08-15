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

const CreateAccountForm = ({ onSubmit }) => {
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

  const attemptRegistration = () => {
    const userInfo = {
      picture: null,
      username: "Worder027",
      accountType: "email",
      email: emailInput,
      firstName: null,
      lastName: null,
      isNamePrivate: false,
      theme: "auto",
      avatarSelection: null,
    };
    onSubmit(userInfo);
  };

  return (
    <>
      <View style={{ alignSelf: "stretch" }}>
        <AuthInput
          label="email"
          value={emailInput}
          error={emailInput !== "" && !isEmailValid}
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
      <AuthButton disabled={!isFormSubmittable} onPress={attemptRegistration}>
        submit
      </AuthButton>
    </>
  );
};

export default CreateAccountForm;
