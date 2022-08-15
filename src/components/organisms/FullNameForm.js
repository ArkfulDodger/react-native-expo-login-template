import { useState } from "react";
import { View } from "react-native";
import AuthInput from "../atoms/AuthInput";
import CheckboxListItem from "../molecules/CheckboxListItem";

const FullNameForm = ({
  firstName,
  lastName,
  setFirstName,
  setLastName,
  isNamePrivate,
  setIsNamePrivate,
  isEditable,
}) => {
  return (
    <View style={{ alignSelf: "stretch" }}>
      <AuthInput
        disabled={!isEditable}
        label="first"
        value={firstName}
        onChangeText={(text) => setFirstName(text)}
      />
      <AuthInput
        disabled={!isEditable}
        label="last"
        value={lastName}
        onChangeText={(text) => setLastName(text)}
      />
      <CheckboxListItem
        onPress={() => setIsNamePrivate(!isNamePrivate)}
        isChecked={!isNamePrivate}
        textChecked="friends can see your name"
        textUnchecked="only you can see your name"
      />
    </View>
  );
};

export default FullNameForm;
