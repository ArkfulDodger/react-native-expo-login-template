// PRIORITY IMPORTS -------------------------------------------------
import "react-native-gesture-handler";
// REACT/EXPO -------------------------------------------------------
import * as SplashScreen from "expo-splash-screen";
// HOOKS ------------------------------------------------------------
import useSplashLoadingScreen from "./src/hooks/useSplashLoadingScreen";
// CONTAINERS -------------------------------------------------------
import GlobalAppContainer from "./src/containers/GlobalAppContainer";
// COMPONENTS -------------------------------------------------------
import AuthScreen from "./src/screens/AuthScreen";

// keep splash screen visible until prompted
SplashScreen.preventAutoHideAsync();

export default function App() {
  // display Splash Screen until app has loaded and rendered Layout Root View
  const { isLoaded, onLayoutRootView } = useSplashLoadingScreen();

  if (!isLoaded) {
    return null;
  }

  return (
    <GlobalAppContainer onLayoutRootView={onLayoutRootView}>
      <AuthScreen />
    </GlobalAppContainer>
  );
}
