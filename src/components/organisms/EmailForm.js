import { useState } from "react";
import AuthInput from "../atoms/AuthInput";
import { convertToPrivateEmail } from "../../utils/utils";

const EmailForm = ({ emailInput, setEmailInput, isEditable }) => {
  return (
    <AuthInput
      keyboardType="email-address"
      disabled={!isEditable}
      label="email"
      value={!isEditable ? convertToPrivateEmail(emailInput) : emailInput}
      onChangeText={(text) => setEmailInput(text)}
    />
  );
};

export default EmailForm;
