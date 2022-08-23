// EXTERNAL ---------------------------------------------------------
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider } from "react-native-paper";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
// SYSTEM -----------------------------------------------------------
import { styles } from "../theme/styles";
// HOOKS ------------------------------------------------------------
import useThemeState from "../hooks/useThemeState";
import { ThemeContext } from "../contexts/GlobalContexts";
// CONTAINERS -------------------------------------------------------
import BackgroundGradientContainer from "../containers/BackgroundGradientContainer";

// contatining component for the app including providers, navigation, and global backgrounds
const GlobalAppContainer = ({ children, onLayoutRootView }) => {
  const { theme, setTheme } = useThemeState();

  return (
    <PaperProvider theme={theme}>
      <ThemeContext.Provider value={setTheme}>
        <SafeAreaProvider>
          <NavigationContainer theme={theme}>
            <BackgroundGradientContainer onLayout={onLayoutRootView}>
              <SafeAreaView style={styles.fillContainer}>
                {children}
              </SafeAreaView>
            </BackgroundGradientContainer>
          </NavigationContainer>
        </SafeAreaProvider>
      </ThemeContext.Provider>
    </PaperProvider>
  );
};

export default GlobalAppContainer;
