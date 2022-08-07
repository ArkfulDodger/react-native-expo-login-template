import React, { useState, useEffect } from "react";
import { View } from "react-native";
import { Checkbox } from "react-native-paper";
import AuthInput from "../atoms/AuthInput";
import CheckboxListItem from "../molecules/CheckboxListItem";

const FullNameForm = ({ userInfo, setUserInfo }) => {
  // create default info for dev purposes
  // TODO: remove once in place
  const defaultInfo = {
    firstName: "Noah",
    lastName: "Reece",
    accountType: "google",
    isNamePrivate: false,
    // accountType: "facebook",
    // accountType: "email",
  };
  userInfo = userInfo || defaultInfo;

  // input state
  const [firstInput, setFirstInput] = useState(userInfo.firstName || "");
  const [lastInput, setLastInput] = useState(userInfo.lastName || "");
  const [isNamePrivateInput, setIsNamePrivateInput] = useState(
    userInfo.isNamePrivate || false
  );
  const [isEditable, setIsEditable] = useState(
    userInfo.accountType === "email"
  );

  return (
    <View style={{ alignSelf: "stretch" }}>
      <AuthInput
        disabled={!isEditable}
        label="first"
        value={firstInput}
        onChangeText={(text) => setFirstInput(text)}
      />
      <AuthInput
        disabled={!isEditable}
        label="last"
        value={lastInput}
        onChangeText={(text) => setLastInput(text)}
      />
      <CheckboxListItem
        onPress={() => setIsNamePrivateInput((prev) => !prev)}
        isChecked={!isNamePrivateInput}
        textChecked="friends can see your name"
        textUnchecked="only you can see your name"
      />
    </View>
  );
};

export default FullNameForm;
