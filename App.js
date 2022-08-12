// PRIORITY IMPORTS -------------------------------------------------
import "react-native-gesture-handler";
// REACT/EXPO -------------------------------------------------------
import { useEffect, useState, useCallback } from "react";
import * as SplashScreen from "expo-splash-screen";
// EXTERNAL ---------------------------------------------------------
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// SYSTEM -----------------------------------------------------------
import { styles } from "./src/theme/styles";
import { themes } from "./src/theme/themes";
import * as utils from "./src/utils/utils";
// HOOKS ------------------------------------------------------------
import useConfigureApp from "./src/hooks/useConfigureApp";
import useSystemTheme from "./src/hooks/useSystemTheme";
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
  const [theme, setTheme] = useState(themes[useSystemTheme()]);

  // configure app on startup
  useEffect(() => {
    useConfigureApp()
      .then(() => setIsLoaded(true))
      .catch(() => console.warn("configuration failure"));
  }, []);

  // reconfigure necesary theme settings on each theme update
  useEffect(() => {
    utils.configureThemeSettings(theme.dark);
  }, [theme]);

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
    <PaperProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer theme={styles.navContainer}>
          <BackgroundGradientContainer onLayout={onLayoutRootView}>
            <SafeAreaView style={{ flex: 1 }}>
              <AuthScreen />
            </SafeAreaView>
          </BackgroundGradientContainer>
        </NavigationContainer>
      </SafeAreaProvider>
    </PaperProvider>
  );
}
