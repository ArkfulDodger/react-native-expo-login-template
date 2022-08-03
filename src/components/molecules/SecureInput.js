import { useState } from "react";
import { TextInput } from "react-native-paper";
import AuthInput from "../atoms/AuthInput";

const SecureInput = (props) => {
  const [isInputHidden, setIsInputHidden] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <AuthInput
      {...props}
      secureTextEntry={isInputHidden}
      right={
        isFocused ? (
          <TextInput.Icon
            name={isInputHidden ? "eye-off" : "eye"}
            onPress={() => setIsInputHidden(!isInputHidden)}
          />
        ) : null
      }
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
    />
  );
};

export default SecureInput;
