import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { colors } from "../theme/colors";
import { styles } from "../theme/styles";

const BackgroundGradientContainer = (props) => {
  return (
    <View {...props} style={styles.fillContainer}>
      <LinearGradient
        colors={colors.backgroundGradient}
        style={styles.fillContainer}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {props.children}
      </LinearGradient>
    </View>
  );
};

export default BackgroundGradientContainer;
