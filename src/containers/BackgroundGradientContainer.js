import { View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "../theme/styles";
import { useTheme } from "react-native-paper";

const BackgroundGradientContainer = (props) => {
  const { colors } = useTheme();

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
