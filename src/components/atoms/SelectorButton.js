import { Button } from "react-native-paper";

const SelectorButton = ({ value, selection, setSelection }) => {
  return (
    <Button
      mode={value === selection ? "contained" : "text"}
      uppercase={false}
      onPress={() => {
        setSelection(value);
      }}
    >
      {value}
    </Button>
  );
};

export default SelectorButton;
