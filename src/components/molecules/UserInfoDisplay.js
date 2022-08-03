import { styles } from "../../theme/styles";
import { View } from "react-native";
import { Text, Avatar } from "react-native-paper";

const UserInfoDisplay = ({ userInfo }) => {
  return (
    <View style={styles.centered}>
      <Avatar.Image size={100} source={{ uri: userInfo.picture }} />
      <Text>Welcome {userInfo.name}!</Text>
      <Text>{userInfo.email}!</Text>
    </View>
  );
};

export default UserInfoDisplay;
