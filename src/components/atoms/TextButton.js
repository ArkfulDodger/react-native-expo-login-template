import { Button } from "react-native-paper";
import { styles } from "../../theme/styles";
import fonts from "../../theme/fonts";

const TextButton = (props) => {
  const textStyle = props.fontSize
    ? [styles.textButtonText, { fontSize: fonts.size["font" + props.fontSize] }]
    : styles.textButtonText;

  // console.log(textStyle);

  return (
    <Button
      {...props}
      uppercase={false}
      style={styles.textButton}
      labelStyle={textStyle}
    >
      {props.children}
    </Button>
  );
};

export default TextButton;
