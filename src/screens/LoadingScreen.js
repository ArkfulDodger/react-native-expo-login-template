import { styles } from "../theme/styles";
import { Text, ActivityIndicator } from "react-native";
import CenteredContainer from "../containers/CenteredContainer";

// TODO: Should Implement Title component, rather than Text

const LoadingScreen = (props) => {
  return (
    <CenteredContainer>
      <Text>WORDERBY</Text>
      <ActivityIndicator />
    </CenteredContainer>
  );
};

export default LoadingScreen;
