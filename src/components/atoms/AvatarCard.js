import {
  Card,
  Avatar,
  IconButton,
  useTheme,
  Text,
  TouchableRipple,
} from "react-native-paper";
import { View } from "react-native";
import { styles } from "../../theme/styles";

const AvatarCard = (props) => {
  const { colors } = useTheme();

  return (
    <Card style={props.style} elevation={props.style.elevation || 1}>
      <TouchableRipple {...props}>
        <View style={styles.centeredRow}>
          <Avatar.Image
            size={props.size || props.textStyle.fontSize * 1.5}
            style={{ borderRadius: 0, backgroundColor: "transparent" }}
            source={props.image}
          />
          {props.children && (
            <Text style={props.textStyle}>{props.children}</Text>
          )}
        </View>
      </TouchableRipple>
    </Card>
  );
};

export default AvatarCard;
