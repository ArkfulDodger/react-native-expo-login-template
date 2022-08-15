import { IconButton } from "react-native-paper";
import { useTheme } from "react-native-paper";

const OffsetEditIcon = ({ size = 20 }) => {
  const { colors } = useTheme();
  return (
    <IconButton
      icon="square-edit-outline"
      color={colors.primary}
      size={size}
      style={{
        position: "absolute",
        borderRadius: 0,
        width: size,
        height: size,
        right: -size,
        bottom: 0,
        margin: 0,
      }}
    />
  );
};

export default OffsetEditIcon;
