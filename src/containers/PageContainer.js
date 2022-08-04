import { View } from "react-native";
import { styles } from "../theme/styles";

const PageContainer = (props) => {
  return (
    <View {...props} style={[styles.fillContainer, styles.pageMargins]}>
      {props.children}
    </View>
  );
};

export default PageContainer;
