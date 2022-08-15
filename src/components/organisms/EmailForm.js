import { useState } from "react";
import AuthInput from "../atoms/AuthInput";

const FullNameForm = ({ emailInput, setEmailInput, isEditable }) => {
  return (
    <AuthInput
      disabled={!isEditable}
      label="email"
      value={emailInput}
      onChangeText={(text) => setEmailInput(text)}
    />
  );
};

export default FullNameForm;
