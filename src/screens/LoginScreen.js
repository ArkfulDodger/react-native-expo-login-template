import { styles } from "../theme/styles";
import fonts from "../theme/fonts";
import { colors } from "../theme/colors";
import { useEffect, useState } from "react";
import { Image, View, KeyboardAvoidingView, StyleSheet } from "react-native";
import {
  Button,
  Text,
  Headline,
  Avatar,
  TextInput,
  Divider,
} from "react-native-paper";
import * as WebBrowser from "expo-web-browser";
import useGoogleAuth from "../hooks/useGoogleAuth";
import CenteredContainer from "../containers/CenteredContainer";

// allows auth session to complete and return results
WebBrowser.maybeCompleteAuthSession();

const LoginScreen = (props) => {
  const { googleToken, getGoogleToken } = useGoogleAuth();
  const [userInfo, setUserInfo] = useState(null);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [isPasswordHidden, setIsPasswordHidden] = useState(true);
  const [focusedInput, setFocusedInput] = useState(null);

  const onFocusInput = (label) => {
    setFocusedInput(label);
  };

  const onBlurInput = (label) => {
    setFocusedInput((currentLabel) =>
      currentLabel === label ? null : currentLabel
    );
  };

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
      // console.log(userInfo);
      return (
        <View style={styles.centered}>
          <Avatar.Image size={100} source={{ uri: userInfo.picture }} />
          <Text>Welcome {userInfo.name}!</Text>
          <Text>{userInfo.email}!</Text>
        </View>
      );
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={{ flex: 1 }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "space-around",
          alignItems: "center",
          marginHorizontal: 10,
          marginVertical: 30,
        }}
      >
        <Image source={require("../assets/images/worderby-splash.png")} />
        {showUserInfo()}
        <Headline>Log In</Headline>
        <View style={{ alignSelf: "stretch" }}>
          <TextInput
            mode="outlined"
            label="email"
            value={emailInput}
            onChangeText={(text) => setEmailInput(text)}
            style={{
              alignSelf: "stretch",
              backgroundColor: colors.inputBackground,
            }}
            dense="true"
            onFocus={() => onFocusInput("email")}
            onBlur={() => onBlurInput("email")}
          />
          <TextInput
            mode="outlined"
            label="password"
            secureTextEntry={isPasswordHidden}
            right={
              focusedInput === "password" ? (
                <TextInput.Icon
                  name={isPasswordHidden ? "eye-off" : "eye"}
                  onPress={() => setIsPasswordHidden(!isPasswordHidden)}
                />
              ) : null
            }
            value={passwordInput}
            onChangeText={(text) => setPasswordInput(text)}
            style={{
              alignSelf: "stretch",
              backgroundColor: colors.inputBackground,
            }}
            dense="true"
            onFocus={() => onFocusInput("password")}
            onBlur={() => onBlurInput("password")}
          />
        </View>
        <Button
          mode="contained"
          uppercase={false}
          style={{
            alignSelf: "stretch",
          }}
          onPress={() => console.log("log in pressed")}
        >
          {googleToken ? "Get User Data" : "log in"}
        </Button>
        <View
          style={{
            alignSelf: "stretch",
            borderBottomColor: "black",
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        ></View>
        <Button
          mode="contained"
          uppercase={false}
          style={{ alignSelf: "stretch" }}
          onPress={
            googleToken
              ? getUserData
              : () => getGoogleToken({ showInRecents: true })
          }
          icon="google"
        >
          {googleToken ? "Get User Data" : "log in"}
        </Button>
        <Button
          mode="contained"
          uppercase={false}
          style={{ alignSelf: "stretch" }}
          onPress={() => console.log("log in with Facebook")}
          icon="facebook"
        >
          log in
        </Button>
        <View>
          <Button>create account</Button>
          <Button>forgot password?</Button>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
