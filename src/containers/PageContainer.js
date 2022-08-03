import { styles } from "../theme/styles";
import { View } from "react-native";

const PageContainer = (props) => {
  return (
    <View {...props} style={[styles.fillContainer, styles.pageMargins]}>
      {props.children}
    </View>
  );
};

export default PageContainer;
