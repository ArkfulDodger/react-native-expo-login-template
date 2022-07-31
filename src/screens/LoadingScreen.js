import { styles } from "../theme/styles";
import fonts from "../theme/fonts";
import { Text, ActivityIndicator } from "react-native";
import CenteredContainer from "../containers/CenteredContainer";

// TODO: Should Implement Title component, rather than Text

const LoadingScreen = (props) => {
  return (
    <CenteredContainer>
      <Text style={{ fontFamily: fonts.type.titleDefault }}>WORDERBY</Text>
      <ActivityIndicator />
    </CenteredContainer>
  );
};

export default LoadingScreen;
