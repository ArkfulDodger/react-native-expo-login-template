import React, { useState, useEffect } from "react";
import ValidationListItem from "../molecules/ValidationListItem";
import { updateBoolStateConditionally } from "../../utils/utils";

const PasswordLengthValidation = ({
  isLengthValid,
  setIsLengthValid,
  passwordInput,
}) => {
  // check/update password validations when password input changes
  useEffect(() => {
    updateBoolStateConditionally({
      state: isLengthValid,
      setter: setIsLengthValid,
      conditions: getIsLengthValid(),
    });
  }, [passwordInput]);

  // validates if password is at least 8 characters long
  const getIsLengthValid = () => {
    return passwordInput.length >= 8;
  };

  return (
    <ValidationListItem
      isValid={isLengthValid}
      textTrue="has at least 8 characters"
      textFalse="must have at least 8 characters"
    />
  );
};

export default PasswordLengthValidation;
