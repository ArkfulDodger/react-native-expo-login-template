import { styles } from "./src/theme/styles";
import * as utils from "./src/utils/utils";
import { useEffect, useState, useCallback } from "react";
import { View, StatusBar, Platform } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import useConfigureApp from "./src/hooks/useConfigureApp";
import useFonts from "./src/hooks/useFonts";
import BackgroundGradientContainer from "./src/containers/BackgroundGradientContainer";
import LoadingScreen from "./src/screens/LoadingScreen";

// keep splash screen visible until prompted
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    useConfigureApp()
      .then(() => setIsLoaded(true))
      .catch(() => console.warn("configuration failure"));
    // useConfigureApp()
    //   .then(() => setIsLoaded(true))
    //   .catch(console.log("configuration failure"));

    // const prepare = async () => {
    //   try {
    //     utils.configurePlatformSpecificSettings();
    //     await useFonts();
    //     await new Promise((resolve) => setTimeout(resolve, 2000));
    //   } catch (e) {
    //     console.warn(e);
    //   } finally {
    //     setIsLoaded(true);
    //   }
    // };
    // prepare();
  }, []);

  // remove splash screen once main app has rendered
  const onLayoutRootView = useCallback(async () => {
    isLoaded && (await SplashScreen.hideAsync());
  }, [isLoaded]);

  // render only splash screen if app not loaded
  if (!isLoaded) {
    return null;
  }

  return (
    <BackgroundGradientContainer onLayout={onLayoutRootView}>
      <LoadingScreen />
    </BackgroundGradientContainer>
  );
}
