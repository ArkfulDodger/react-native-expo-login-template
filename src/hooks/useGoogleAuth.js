import { useEffect, useState } from "react";
import * as Google from "expo-auth-session/providers/google";

export default useGoogleAuth = () => {
  const [accessToken, setAccessToken] = useState();

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

  return [accessToken, promptAsync];
};
