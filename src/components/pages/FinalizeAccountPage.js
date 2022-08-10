// REACT/EXPO -------------------------------------------------------
import { View } from "react-native";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// CONTAINERS -------------------------------------------------------
import PageContainer from "../../containers/PageContainer";
// COMPONENTS -------------------------------------------------------
import AccountTypeIndicator from "../molecules/AccountTypeIndicator";
import AuthButton from "../atoms/AuthButton";
import AvatarEditable from "../molecules/AvatarEditable";
import DisplayNameEditable from "../molecules/DisplayNameEditable";
import FullNameForm from "../organisms/FullNameForm";
import HorizontalLine from "../atoms/HorizontalLine";
import ThemeSelector from "../organisms/ThemeSelector";

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
        <ThemeSelector />
        <AuthButton onPress={() => console.log("saved and logged in!")}>
          save and log in
        </AuthButton>
      </View>
    </PageContainer>
  );
};

export default FinalizeAccountPage;
