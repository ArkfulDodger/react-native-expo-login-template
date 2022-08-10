// REACT/EXPO -------------------------------------------------------
import React, { useState, useEffect } from "react";
import { View } from "react-native";
// EXTERNAL ---------------------------------------------------------
import { createStackNavigator } from "@react-navigation/stack";
// SYSTEM -----------------------------------------------------------
import { styles } from "../theme/styles";
// COMPONENTS -------------------------------------------------------
import CreateAccountPage from "../components/pages/CreateAccountPage";
import FinalizeAccountPage from "../components/pages/FinalizeAccountPage";
import LoginPage from "../components/pages/LoginPage";

const Stack = createStackNavigator();

const AuthStack = (props) => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={styles.defaultStackOptions}
    >
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Create Account" component={CreateAccountPage} />
      <Stack.Screen name="Finalize Account" component={FinalizeAccountPage} />
    </Stack.Navigator>
  );
};

export default AuthStack;
