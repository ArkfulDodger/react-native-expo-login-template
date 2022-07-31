import { styles } from "./src/theme/styles";
import * as utils from "./src/utils/utils";
import { useState } from "react";
import { View, StatusBar, Platform } from "react-native";
import AppLoading from "expo-app-loading";
import useFonts from "./src/hooks/useFonts";
import BackgroundGradientContainer from "./src/containers/BackgroundGradientContainer";
import LoadingScreen from "./src/screens/LoadingScreen";

// TODO: explore possibly utilizing Status Bar from "expo-status-bar"

export default function App() {
  const [isReady, setIsReady] = useState(false);

  const loadFonts = async () => {
    await useFonts();
  };

  // do platform configuration
  utils.configurePlatformSpecificSettings();

  if (!isReady) {
    return (
      <AppLoading
        startAsync={loadFonts}
        onFinish={() => setIsReady(true)}
        onError={() => {
          console.log("App Loading errored out!");
        }}
      />
    );
  }

  return (
    <BackgroundGradientContainer>
      <LoadingScreen />
    </BackgroundGradientContainer>
  );
}
