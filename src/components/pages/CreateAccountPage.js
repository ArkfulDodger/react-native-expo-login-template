// REACT/EXPO -------------------------------------------------------
import { View } from "react-native";
// EXTERNAL ---------------------------------------------------------
import { Headline, Button } from "react-native-paper";
// SYSTEM -----------------------------------------------------------
import { styles } from "../../theme/styles";
// CONTAINERS -------------------------------------------------------
import PageContainer from "../../containers/PageContainer";
// COMPONENTS -------------------------------------------------------
import CreateAccountForm from "../organisms/CreateAccountForm";
import HorizontalLine from "../atoms/HorizontalLine";
import OauthCreateAccountMenu from "../organisms/OauthCreateAccountMenu";
import TextButton from "../atoms/TextButton";

const CreateAccountPage = ({ navigation }) => {
  const goToFinalizeAccount = (userInfo) => {
    navigation.navigate("Finalize Account", { userInfo: userInfo });
  };

  return (
    <PageContainer>
      <View style={styles.spreadColumn}>
        <Headline>Create Account</Headline>
        <CreateAccountForm onSubmit={goToFinalizeAccount} />
        <HorizontalLine />
        <OauthCreateAccountMenu goToFinalizeAccount={goToFinalizeAccount} />
        <TextButton fontSize={20} onPress={() => navigation.navigate("Login")}>
          return to login
        </TextButton>
      </View>
    </PageContainer>
  );
};

export default CreateAccountPage;
