import { styles } from "./src/theme/styles";
import { useEffect, useState, useCallback } from "react";
import { View, Image, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import useConfigureApp from "./src/hooks/useConfigureApp";
import BackgroundGradientContainer from "./src/containers/BackgroundGradientContainer";
import LoadingScreen from "./src/screens/LoadingScreen";
import LoginScreen from "./src/screens/LoginScreen";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

// TODO: update splash screen to be customized/animated

// allows auth session to complete and return results
WebBrowser.maybeCompleteAuthSession();

// keep splash screen visible until prompted
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [accessToken, setAccessToken] = useState();
  const [userInfo, setUserInfo] = useState();

  const [resquest, response, promptAsync] = Google.useAuthRequest({
    expoClientId:
      "962076365408-s3tomb4rc4nchdlcjljgj5mr1pv757u0.apps.googleusercontent.com",
    androidClientId:
      "962076365408-dnc65jt4ldvkth9tpei9sk4s6mc6obt1.apps.googleusercontent.com",
    iosClientId:
      "962076365408-60uatlibh9pbk7as31torfnigq7p8m0u.apps.googleusercontent.com",
  });

  // set access Token from successful GoogleAuthRequest
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  const getUserData = async () => {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${accessToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  };

  const showUserInfo = () => {
    if (userInfo) {
      return (
        <View style={styles.centered}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}!</Text>
          <Text>{userInfo.email}!</Text>
        </View>
      );
    }
  };

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
      <LoginScreen
        accessToken={accessToken}
        getUserData={getUserData}
        promptAsync={promptAsync}
        showUserInfo={showUserInfo}
      />
    </BackgroundGradientContainer>
  );
}
