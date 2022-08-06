// REACT/EXPO -------------------------------------------------------
import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
// EXTERNAL ---------------------------------------------------------
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// HOOKS ------------------------------------------------------------
import useConfigureApp from "./src/hooks/useConfigureApp";
// CONTAINERS -------------------------------------------------------
import BackgroundGradientContainer from "./src/containers/BackgroundGradientContainer";
// COMPONENTS -------------------------------------------------------
import AuthScreen from "./src/screens/AuthScreen";

// TODO: update splash screen to be customized/animated

// Test change

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
    <PaperProvider>
      <SafeAreaProvider>
        <BackgroundGradientContainer onLayout={onLayoutRootView}>
          <SafeAreaView style={{ flex: 1 }}>
            <AuthScreen />
          </SafeAreaView>
        </BackgroundGradientContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
