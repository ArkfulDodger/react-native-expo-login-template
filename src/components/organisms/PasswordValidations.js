// REACT/EXPO -------------------------------------------------------
import React, { useState, useEffect } from "react";
import { View } from "react-native";
// SYSTEM -----------------------------------------------------------
import { updateBoolStateConditionally } from "../../utils/utils";
// COMPONENTS -------------------------------------------------------
import PasswordAlphaNumericValidation from "../molecules/PasswordAlphaNumericValidation";
import PasswordLengthValidation from "../molecules/PasswordLengthValidation";
import PasswordMatchValidation from "../molecules/PasswordMatchValidation";

const PasswordValidations = ({
  isPasswordValid,
  setIsPasswordValid,
  isConfirmationValid,
  setIsConfirmationValid,
  passwordInput,
  confirmPasswordInput,
}) => {
  // validation states
  const [isLengthValid, setIsLengthValid] = useState(false);
  const [isAlphaNumericalityValid, setIsAlphaNumericalityValid] =
    useState(false);
  const [isConfirmPasswordMatch, setIsConfirmPasswordMatch] = useState(false);

  // check/update overall validation when any individual validation updates
  useEffect(() => {
    updateBoolStateConditionally({
      state: isPasswordValid,
      setter: setIsPasswordValid,
      conditions: [isLengthValid, isAlphaNumericalityValid],
    });
  }, [isLengthValid, isAlphaNumericalityValid]);

  useEffect(() => {
    updateBoolStateConditionally({
      state: isConfirmationValid,
      setter: setIsConfirmationValid,
      conditions: [isConfirmPasswordMatch],
    });
  }, [isConfirmPasswordMatch]);

  return (
    <View>
      <PasswordLengthValidation
        isLengthValid={isLengthValid}
        setIsLengthValid={setIsLengthValid}
        passwordInput={passwordInput}
      />
      <PasswordAlphaNumericValidation
        isAlphaNumericalityValid={isAlphaNumericalityValid}
        setIsAlphaNumericalityValid={setIsAlphaNumericalityValid}
        passwordInput={passwordInput}
      />
      <PasswordMatchValidation
        isConfirmPasswordMatch={isConfirmPasswordMatch}
        setIsConfirmPasswordMatch={setIsConfirmPasswordMatch}
        passwordInput={passwordInput}
        confirmPasswordInput={confirmPasswordInput}
      />
    </View>
  );
};

export default PasswordValidations;
