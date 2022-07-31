import { styles } from "./src/theme/styles";
import * as Utils from "./src/utils/Utils";
import { View, StatusBar, Platform } from "react-native";
import BackgroundGradientContainer from "./src/containers/BackgroundGradientContainer";
import LoadingScreen from "./src/screens/LoadingScreen";

// TODO: explore possibly utilizing Status Bar from "expo-status-bar"

// do platform configuration
Utils.configurePlatformSpecificSettings();

export default function App() {
  return (
    <BackgroundGradientContainer>
      <LoadingScreen />
    </BackgroundGradientContainer>
  );
}
