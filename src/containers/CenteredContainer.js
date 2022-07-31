import { styles } from "../theme/styles";
import { View } from "react-native";

const CenteredContainer = (props) => {
  return (
    <View style={[styles.fillContainer, styles.centered]}>
      {props.children}
    </View>
  );
};

export default CenteredContainer;
