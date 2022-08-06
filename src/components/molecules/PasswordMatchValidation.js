import React, { useState, useEffect } from "react";
import { updateBoolStateConditionally } from "../../utils/utils";
import ValidationListItem from "../molecules/ValidationListItem";

const PasswordMatchValidation = ({
  isConfirmPasswordMatch,
  setIsConfirmPasswordMatch,
  passwordInput,
  confirmPasswordInput,
}) => {
  // check/update password match when either password input changes
  useEffect(() => {
    updateBoolStateConditionally({
      state: isConfirmPasswordMatch,
      setter: setIsConfirmPasswordMatch,
      conditions: getIsConfirmPasswordMatch(),
    });
  }, [passwordInput, confirmPasswordInput]);

  // passwords match if inputs are identical and not empty
  const getIsConfirmPasswordMatch = () => {
    return passwordInput !== "" && passwordInput === confirmPasswordInput;
  };

  return (
    <ValidationListItem
      isValid={isConfirmPasswordMatch}
      textTrue="passwords match!"
      textFalse="passwords do not match"
    />
  );
};

export default PasswordMatchValidation;
