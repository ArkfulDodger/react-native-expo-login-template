// REACT/EXPO -------------------------------------------------------
import { View } from "react-native";
// EXTERNAL ---------------------------------------------------------
import { Headline, Button } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// CONTAINERS -------------------------------------------------------
import PageContainer from "../../containers/PageContainer";
// COMPONENTS -------------------------------------------------------
import AccountTypeIndicator from "../molecules/AccountTypeIndicator";
import AuthButton from "../atoms/AuthButton";
import AvatarEditable from "../molecules/AvatarEditable";
import CreateAccountForm from "../organisms/CreateAccountForm";
import DisplayNameEditable from "../molecules/DisplayNameEditable";
import FullNameForm from "../organisms/FullNameForm";
import HorizontalLine from "../atoms/HorizontalLine";
import OauthCreateAccountMenu from "../organisms/OauthCreateAccountMenu";

const FinalizeAccountPage = ({ userInfo, setUserInfo }) => {
  return (
    <PageContainer>
      <View style={styles.spreadColumn}>
        <AvatarEditable userInfo={userInfo} />
        <DisplayNameEditable userInfo={userInfo} />
        <HorizontalLine />
        <AccountTypeIndicator userInfo={userInfo} />
        <FullNameForm userInfo={userInfo} />
        <HorizontalLine />
        {/* <ThemeSelector /> */}
        <AuthButton onPress={() => console.log("saved and logged in!")}>
          save and log in
        </AuthButton>
      </View>
    </PageContainer>
  );
};

export default FinalizeAccountPage;
