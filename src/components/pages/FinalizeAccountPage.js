import { useState } from "react";
// REACT/EXPO -------------------------------------------------------
import { View } from "react-native";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// CONTAINERS -------------------------------------------------------
import PageContainer from "../../containers/PageContainer";
// COMPONENTS -------------------------------------------------------
import AccountTypeIndicator from "../molecules/AccountTypeIndicator";
import AuthButton from "../atoms/AuthButton";
import AuthInput from "../atoms/AuthInput";
import AvatarEditable from "../molecules/AvatarEditable";
import DisplayNameEditable from "../molecules/DisplayNameEditable";
import EmailForm from "../organisms/EmailForm";
import FullNameForm from "../organisms/FullNameForm";
import HorizontalLine from "../atoms/HorizontalLine";
import ThemeSelector from "../organisms/ThemeSelector";

const FinalizeAccountPage = ({
  route: {
    params: { userInfo: receivedUserInfo },
  },
}) => {
  const [userInfoToSave, setUserInfoToSave] = useState(receivedUserInfo);
  const [isUsernameAvailable, setIsUsernameAvailable] = useState(true);

  const setUserInfoAttribute = (attribute, value) => {
    setUserInfoToSave((prev) => {
      return { ...prev, [attribute]: value };
    });
  };

  const onSaveAndLogIn = () => {
    console.log("saved and logged in!");
  };

  return (
    <PageContainer>
      <View style={styles.spreadColumn}>
        <AvatarEditable
          avatarUrl={userInfoToSave.picture}
          setAvatarUrl={(value) => setUserInfoAttribute("picture", value)}
        />
        <DisplayNameEditable
          username={userInfoToSave.username}
          setUsername={(value) => setUserInfoAttribute("username", value)}
          isUsernameAvailable={isUsernameAvailable}
          setIsUsernameAvailable={setIsUsernameAvailable}
        />
        <HorizontalLine />
        <View style={{ alignSelf: "stretch" }}>
          <AccountTypeIndicator accountType={userInfoToSave.accountType} />
          <EmailForm
            emailInput={userInfoToSave.email}
            setEmailInput={(value) => setUserInfoAttribute("email", value)}
            isEditable={false}
          />
          <FullNameForm
            firstName={userInfoToSave.firstName}
            setFirstName={(value) => setUserInfoAttribute("firstName", value)}
            lastName={userInfoToSave.lastName}
            setLastName={(value) => setUserInfoAttribute("lastName", value)}
            isNamePrivate={userInfoToSave.isNamePrivate}
            setIsNamePrivate={(value) =>
              setUserInfoAttribute("isNamePrivate", value)
            }
            isEditable={receivedUserInfo.accountType === "email"}
          />
        </View>
        <HorizontalLine />
        <ThemeSelector
          themePreference={userInfoToSave.theme}
          setThemePreference={(value) => setUserInfoAttribute("theme", value)}
        />
        <AuthButton disabled={!isUsernameAvailable} onPress={onSaveAndLogIn}>
          save and log in
        </AuthButton>
      </View>
    </PageContainer>
  );
};

export default FinalizeAccountPage;
