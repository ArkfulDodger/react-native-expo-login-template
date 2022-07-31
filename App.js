import { styles } from "./src/theme/styles";
import * as utils from "./src/utils/utils";
import { useEffect, useState, useCallback } from "react";
import { View, StatusBar, Platform } from "react-native";
// import AppLoading from "expo-app-loading";
import * as SplashScreen from "expo-splash-screen";
import useFonts from "./src/hooks/useFonts";
import BackgroundGradientContainer from "./src/containers/BackgroundGradientContainer";
import LoadingScreen from "./src/screens/LoadingScreen";

// TODO: explore possibly utilizing Status Bar from "expo-status-bar"

// keep splash screen visible until prompted
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const prepare = async () => {
      try {
        // do platform configuration
        utils.configurePlatformSpecificSettings();

        // load fonts
        await useFonts();

        // TODO: remove below
        // artificial 2 second delay after loading
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setIsLoaded(true);
      }
    };

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (isLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [isLoaded]);

  // render only splash screen if app not loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <BackgroundGradientContainer>
        <LoadingScreen />
      </BackgroundGradientContainer>
    </View>
  );
}
