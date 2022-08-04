import { View } from "react-native";
import { styles } from "../theme/styles";

const CenteredContainer = (props) => {
  return (
    <View {...props} style={[styles.fillContainer, styles.centered]}>
      {props.children}
    </View>
  );
};

export default CenteredContainer;
