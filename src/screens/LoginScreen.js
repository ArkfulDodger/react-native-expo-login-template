import { useEffect, useState } from "react";
import { styles } from "../theme/styles";
import fonts from "../theme/fonts";
import { Text, Image, Button, View } from "react-native";
import CenteredContainer from "../containers/CenteredContainer";
import useGoogleAuth from "../hooks/useGoogleAuth";
import * as WebBrowser from "expo-web-browser";

// allows auth session to complete and return results
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = (props) => {
  const [userInfo, setUserInfo] = useState();
  const { accessToken, promptAsync } = useGoogleAuth();

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

  return (
    <CenteredContainer>
      {showUserInfo()}
      <Button
        title={accessToken ? "Get User Data" : "Login"}
        onPress={
          accessToken ? getUserData : () => promptAsync({ showInRecents: true })
        }
      />
    </CenteredContainer>
  );
};

export default LoginScreen;
