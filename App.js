import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import useConfigureApp from "./src/hooks/useConfigureApp";
import BackgroundGradientContainer from "./src/containers/BackgroundGradientContainer";
import LoginScreen from "./src/screens/LoginScreen";

// TODO: update splash screen to be customized/animated

// keep splash screen visible until prompted
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  // configure app on startup
  useEffect(() => {
    useConfigureApp()
      .then(() => setIsLoaded(true))
      .catch(() => console.warn("configuration failure"));
  }, []);

  // callback to remove splash screen once main app has rendered
  const onLayoutRootView = useCallback(async () => {
    isLoaded && (await SplashScreen.hideAsync());
  }, [isLoaded]);

  // render nothing (only splash screen) if app not loaded
  if (!isLoaded) {
    return null;
  }

  // render app within universal background container
  return (
    <BackgroundGradientContainer onLayout={onLayoutRootView}>
      <LoginScreen />
    </BackgroundGradientContainer>
  );
}
