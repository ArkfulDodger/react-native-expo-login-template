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

const CreateAccountPage = (props) => {
  return (
    <PageContainer>
      <View style={styles.spreadColumn}>
        <Headline>Create Account</Headline>
        <CreateAccountForm />
        <HorizontalLine />
        <OauthCreateAccountMenu />
        <Button>return to login</Button>
      </View>
    </PageContainer>
  );
};

export default CreateAccountPage;
