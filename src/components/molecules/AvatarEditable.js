import { Pressable } from "react-native";
import { Avatar } from "react-native-paper";
import OffsetEditIcon from "../atoms/OffsetEditIcon";
import { getRandomInt } from "../../utils/utils";

const AvatarEditable = ({
  firstName,
  avatarUrl,
  setAvatarUrl,
  avatarSelection,
  setAvatarSelection,
}) => {
  const iconOptions = [
    //people
    "account", // default
    "account-cowboy-hat",
    "account-tie",
    "account-tie-hat",
    "baby-face-outline",
    "face-man",
    "face-man-outline",
    "face-woman",
    "face-woman-outline",
    "ninja",
    "pirate",

    // emoticons
    "emoticon", //smile
    "emoticon-angry",
    "emoticon-cool",
    "emoticon-devil",
    "emoticon-excited",
    "emoticon-happy",
    "emoticon-neutral",
    "emoticon-poop",
    "emoticon-wink",
    "emoticon-lol",

    // letters
    "alpha-" + (firstName ? firstName.charAt(0).toLowerCase() : "w"),

    //creatures
    "alien",
    "bat",
    "bee",
    "bird",
    "butterfly",
    "cat",
    "cow",
    "dog",
    "dolphin",
    "donkey",
    "duck",
    "elephant",
    "fish",
    "fishbowl",
    "ghost",
    "horse",
    "jellyfish",
    "kangaroo",
    "koala",
    "ladybug",
    "owl",
    "panda",
    "penguin",
    "rabbit",
    "rodent",
    "shark",
    "sheep",
    "snake",
    "snail",
    "spider",
    "turkey",
    "unicorn",

    // people symbols
    "arm-flex",
    "bow-tie",
    "brain",
    "hand-peace",
    "mustache",
    "skull-outline",
    "sunglasses",

    // food
    "food-apple",
    "food-drumstick",
    "hamburger",
    "ice-cream",
    "muffin",
    "pizza",

    // objects/symbols
    "boxing-glove",
    "drama-masks",
    "flower",
    "flower-tulip",
    "football",
    "guitar-acoustic",
    "halloween",
    "leaf",
    "leaf-maple",
    "molecule",
    "music-note",

    // game symbols
    "cards-club",
    "cards-diamond",
    "cards-heart",
    "cards-spade",
    "chess-king",
    "chess-queen",
    "chess-pawn",
    "chess-knight",
    "chess-bishop",
    "chess-rook",
    "gamepad-variant",
    "puzzle",
  ];

  const defaultIcon = iconOptions[0];

  let avatar = !avatarSelection ? (
    avatarUrl ? (
      <Avatar.Image size={70} source={{ uri: avatarUrl }} />
    ) : (
      <Avatar.Icon size={70} icon={defaultIcon} />
    )
  ) : (
    <Avatar.Icon size={70} icon={avatarSelection} />
  );

  return (
    <Pressable onPress={() => console.log("edit avatar!")}>
      {avatar}
      <OffsetEditIcon size={24} />
    </Pressable>
  );
};

export default AvatarEditable;
