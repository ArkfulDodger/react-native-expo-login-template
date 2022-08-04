// REACT/EXPO -------------------------------------------------------
import { Text, ActivityIndicator } from "react-native";
// SYSTEM -----------------------------------------------------------
import fonts from "../theme/fonts";
import { styles } from "../theme/styles";
// CONTAINERS -------------------------------------------------------
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
