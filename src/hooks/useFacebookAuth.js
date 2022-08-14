import { useEffect, useState } from "react";
import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";

export default useFacebookAuth = () => {
  const [accessToken, setAccessToken] = useState();

  const [resquest, response, promptAsync] = Facebook.useAuthRequest({
    expoClientId: "775773773769537",
    androidClientId: "775773773769537",
    iosClientId: "775773773769537",
    clientId: "775773773769537",
  });

  // set access Token from successful FacebookAuthRequest
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  return { facebookToken: accessToken, getFacebookToken: promptAsync };
};
