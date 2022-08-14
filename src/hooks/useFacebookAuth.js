import { useEffect, useState } from "react";
import { ResponseType } from "expo-auth-session";
import * as Facebook from "expo-auth-session/providers/facebook";

export default useFacebookAuth = () => {
  const [accessToken, setAccessToken] = useState();

  const [resquest, response, promptAsync] = Facebook.useAuthRequest({
    expoClientId: "759303255342421",
    androidClientId: "759303255342421",
    iosClientId: "759303255342421",
    clientId: "759303255342421",
    responseType: ResponseType.Code,
  });

  // set access Token from successful FacebookAuthRequest
  useEffect(() => {
    if (response) {
      console.log("response: " + response.params);
    }
    if (response?.type === "success") {
      const { code } = response.params;
      console.log("response params: " + response.params);
      // setAccessToken(response.authentication.accessToken);
      // console.log("token: " + response.authentication.accessToken);
    }
  }, [response]);

  return { facebookToken: accessToken, getFacebookToken: promptAsync };
};
