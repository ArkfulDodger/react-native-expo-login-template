import { Card, Avatar, Text, TouchableRipple } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../../theme/styles";
import LogoAvatar from "../atoms/LogoAvatar";

const AvatarCard = (props) => {
  return (
    <Card style={props.style} elevation={props.style.elevation || 1}>
      <TouchableRipple onPress={props.onPress}>
        <View style={styles.centeredRow}>
          <LogoAvatar
            size={props.size || props.textStyle.fontSize * 1.5}
            image={props.image}
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
