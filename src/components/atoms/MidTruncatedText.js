import { Text } from "react-native-paper";

const MidTruncatedText = (props) => {
  return (
    <Text
      {...props}
      numberOfLines={1}
      ellipsizeMode="middle"
      adjustsFontSizeToFit={false}
    >
      {props.children}
    </Text>
  );
};

export default MidTruncatedText;
