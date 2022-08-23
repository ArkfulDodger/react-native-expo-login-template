import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
import useConfigureApp from "./useConfigureApp";

// TODO: update splash screen to be customized/animated

// keep splash screen visible until prompted
SplashScreen.preventAutoHideAsync();

export default useSplashLoadingScreen = () => {
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

  // return app loaded state and splash removal callback
  return { isLoaded: isLoaded, onLayoutRootView: onLayoutRootView };
};
