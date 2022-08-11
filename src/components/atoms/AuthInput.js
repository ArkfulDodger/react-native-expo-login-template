import { useState } from "react";
import { TextInput } from "react-native-paper";
import { colors } from "../../theme/colors";
import { styles } from "../../theme/styles";

const AuthInput = (props) => {
  const [isMarkedError, setIsMarkedError] = useState(false);

  const onBlur = () => {
    props.onBlur && props.onBlur();
    props.error && setIsMarkedError(true);
  };

  const onFocus = () => {
    props.onFocus && props.onFocus();
    isMarkedError && setIsMarkedError(false);
  };

  return (
    <TextInput
      {...props}
      right={
        isMarkedError ? (
          <TextInput.Icon name={"exclamation-thick"} />
        ) : (
          props.right
        )
      }
      mode="outlined"
      style={styles.authInput}
      dense="true"
      onBlur={onBlur}
      onFocus={onFocus}
      error={isMarkedError}
      textContentType="oneTimeCode" // ensures password fields not covered in iOS
    />
  );
};

export default AuthInput;
