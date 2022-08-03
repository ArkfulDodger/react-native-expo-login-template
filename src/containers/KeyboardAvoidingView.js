import { styles } from "../theme/styles";
import { KeyboardAvoidingView as KeyboardAvoidingViewNative } from "react-native";

const KeyboardAvoidingView = (props) => {
  return (
    <KeyboardAvoidingViewNative
      {...props}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.fillContainer}
    >
      {props.children}
    </KeyboardAvoidingViewNative>
  );
};

export default KeyboardAvoidingView;
