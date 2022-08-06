import React, { useState, useEffect } from "react";
import ValidationListItem from "../molecules/ValidationListItem";
import { updateBoolStateConditionally } from "../../utils/utils";

const PasswordAlphaNumericValidation = ({
  isAlphaNumericalityValid,
  setIsAlphaNumericalityValid,
  passwordInput,
}) => {
  // check/update password validations when password input changes
  useEffect(() => {
    updateBoolStateConditionally({
      state: isAlphaNumericalityValid,
      setter: setIsAlphaNumericalityValid,
      conditions: getIsAlphaNumericalityValid(),
    });
  }, [passwordInput]);

  // returns true if at least one number and at least one letter are found
  const getIsAlphaNumericalityValid = () => {
    return /(?=.*[A-Za-z])(?=.*[0-9])/.test(passwordInput);
  };

  return (
    <ValidationListItem
      isValid={isAlphaNumericalityValid}
      textTrue="includes both letters and numbers"
      textFalse="must include both letters and numbers"
    />
  );
};

export default PasswordAlphaNumericValidation;
