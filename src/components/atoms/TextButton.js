import { Button } from "react-native-paper";
import { styles } from "../../theme/styles";
import fonts from "../../theme/fonts";

const TextButton = (props) => {
  // override font size if passed as a prop
  const textStyle = props.fontSize
    ? [styles.textButtonText, { fontSize: fonts.size["font" + props.fontSize] }]
    : styles.textButtonText;

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
