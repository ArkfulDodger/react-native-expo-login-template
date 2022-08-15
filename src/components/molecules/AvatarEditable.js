import { Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import OffsetEditIcon from "../atoms/OffsetEditIcon";

const AvatarEditable = ({ userInfo }) => {
  const defaultInfo = {
    picture: "https://ca.slack-edge.com/T02MD9XTF-U02TC8XDF3L-84d65a18df17-72",
  };
  userInfo = userInfo || defaultInfo;

  return (
    <Pressable onPress={() => console.log("edit avatar!")}>
      <Avatar.Image size={70} source={{ uri: userInfo.picture }} />
      <OffsetEditIcon size={24} />
    </Pressable>
  );
};

export default AvatarEditable;
