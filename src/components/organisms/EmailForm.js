import { useState } from "react";
import AuthInput from "../atoms/AuthInput";
import { convertToPrivateEmail } from "../../utils/utils";

const FullNameForm = ({ emailInput, setEmailInput, isEditable }) => {
  return (
    <AuthInput
      disabled={!isEditable}
      label="email"
      value={!isEditable ? convertToPrivateEmail(emailInput) : emailInput}
      onChangeText={(text) => setEmailInput(text)}
    />
  );
};

export default FullNameForm;
