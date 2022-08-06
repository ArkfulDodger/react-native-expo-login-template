import React, { useState, useEffect } from "react";
import { View } from "react-native";
import ValidationCheck from "../molecules/ValidationCheck";
import { updateBoolStateConditionally } from "../../utils/utils";

const PasswordValidations = ({
  isPasswordValid,
  setIsPasswordValid,
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
      condistions: [
        isLengthValid,
        isAlphaNumericalityValid,
        isConfirmPasswordMatch,
      ],
    });
  }, [isLengthValid, isAlphaNumericalityValid, isConfirmPasswordMatch]);

  // check/update password validations when password input changes
  useEffect(() => {
    updateBoolStateConditionally({
      state: isLengthValid,
      setter: setIsLengthValid,
      conditions: getIsLengthValid(),
    });
    updateBoolStateConditionally({
      state: isAlphaNumericalityValid,
      setter: setIsAlphaNumericalityValid,
      conditions: getIsAlphaNumericalityValid(),
    });
  }, [passwordInput]);

  // check/update password match when either password input changes
  useEffect(() => {
    updateBoolStateConditionally({
      state: isConfirmPasswordMatch,
      setter: setIsConfirmPasswordMatch,
      conditions: getIsConfirmPasswordMatch(),
    });
  }, [passwordInput, confirmPasswordInput]);

  const getIsLengthValid = () => {
    // TODO: Implement length validation
    return true;
  };

  const getIsAlphaNumericalityValid = () => {
    // TODO: Implement validation
    return true;
  };

  const getIsConfirmPasswordMatch = () => {
    // TODO: Verify password match
    return true;
  };

  return (
    <View>
      <ValidationCheck
        isValid={isLengthValid}
        textTrue="has at least 8 characters"
        textFalse="must have at least 8 characters"
      />
      <ValidationCheck
        isValid={isAlphaNumericalityValid}
        textTrue="has both letters and numbers"
        textFalse="must have both letters and numbers"
      />
      <ValidationCheck
        isValid={isConfirmPasswordMatch}
        textTrue="passwords match!"
        textFalse="passwords do not match"
      />
    </View>
  );
};

export default PasswordValidations;
