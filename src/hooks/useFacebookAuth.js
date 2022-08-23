import { useEffect, useState } from "react";
import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";

export default useFacebookAuth = () => {
  const [accessToken, setAccessToken] = useState();

  const [resquest, response, promptAsync] = Facebook.useAuthRequest({
    expoClientId: "yourClientIdHere",
    androidClientId: "yourClientIdHere",
    iosClientId: "yourClientIdHere",
    clientId: "yourClientIdHere",
  });

  // set access Token from successful FacebookAuthRequest
  useEffect(() => {
    if (response?.type === "success") {
      setAccessToken(response.authentication.accessToken);
    }
  }, [response]);

  return [accessToken, promptAsync];
};
