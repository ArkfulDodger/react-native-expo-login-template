import { Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import OffsetEditIcon from "../atoms/OffsetEditIcon";

const AvatarEditable = ({ avatarUrl, setAvatarUrl }) => {
  return (
    <Pressable onPress={() => console.log("edit avatar!")}>
      <Avatar.Image size={70} source={{ uri: avatarUrl }} />
      <OffsetEditIcon size={24} />
    </Pressable>
  );
};

export default AvatarEditable;
