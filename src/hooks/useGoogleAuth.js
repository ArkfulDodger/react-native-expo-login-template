import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";

export default useGoogleAuth = () => {
  const [accessToken, setAccessToken] = useState();

  const [resquest, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "your google expo id here",
    androidClientId: "your google android id here",
    iosClientId: "your google ios id here",
  });

  // set access Token from successful GoogleAuthRequest
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  return [accessToken, promptAsync];
};
