import { styles } from "../theme/styles";
import fonts from "../theme/fonts";
import { useEffect, useState } from "react";
import { Text, Image, Button, View } from "react-native";
import * as WebBrowser from "expo-web-browser";
import useGoogleAuth from "../hooks/useGoogleAuth";
import CenteredContainer from "../containers/CenteredContainer";

// allows auth session to complete and return results
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = (props) => {
  const [userInfo, setUserInfo] = useState();
  const { googleToken, getGoogleToken } = useGoogleAuth();

  const getUserData = async () => {
    let userInfoResponse = await fetch(
      "https://www.googleapis.com/userinfo/v2/me",
      {
        headers: { Authorization: `Bearer ${googleToken}` },
      }
    );

    userInfoResponse.json().then((data) => {
      setUserInfo(data);
    });
  };

  const showUserInfo = () => {
    if (userInfo) {
      console.log(userInfo);
      return (
        <View style={styles.centered}>
          <Image source={{ uri: userInfo.picture }} style={styles.profilePic} />
          <Text>Welcome {userInfo.name}!</Text>
          <Text>{userInfo.email}!</Text>
        </View>
      );
    }
  };

  return (
    <CenteredContainer>
      {showUserInfo()}
      <Button
        title={googleToken ? "Get User Data" : "Login"}
        onPress={
          googleToken
            ? getUserData
            : () => getGoogleToken({ showInRecents: true })
        }
      />
    </CenteredContainer>
  );
};

export default LoginScreen;
