import { useState } from "react";
import { TextInput, useTheme } from "react-native-paper";
import { styles } from "../../theme/styles";

const AuthInput = (props) => {
  const [isMarkedError, setIsMarkedError] = useState(false);
  const [isError, setIsError] = useState(false);
  const { colors } = useTheme();

  const onBlur = () => {
    props.onBlur && props.onBlur();
    setIsError(props.error);
    props.isErrorMarked && props.error && setIsMarkedError(true);
  };

  const onFocus = () => {
    props.onFocus && props.onFocus();
    setIsError(false);
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
      error={isError}
      mode="outlined"
      style={[styles.authInput, { backgroundColor: colors.backgroundLight }]}
      dense="true"
      onBlur={onBlur}
      onFocus={onFocus}
      // error={props.error}
      textContentType="oneTimeCode" // ensures password fields not covered in iOS
      theme={{ colors: { primary: colors.submit } }}
    />
  );
};

export default AuthInput;
