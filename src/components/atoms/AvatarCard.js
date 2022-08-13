import { Card, Avatar, IconButton, useTheme, Text } from "react-native-paper";
import { View } from "react-native";
import { styles } from "../../theme/styles";

const AvatarCard = (props) => {
  const { colors } = useTheme();

  return (
    <Card {...props} elevation={props.style.elevation || 1}>
      <View style={styles.centeredRow}>
        <Avatar.Icon size={props.size || props.textStyle.fontSize * 1.5} />
        {props.children && (
          <Text style={props.textStyle}>{props.children}</Text>
        )}
      </View>
    </Card>
  );
};

export default AvatarCard;
