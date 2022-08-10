import SelectorRow from "../molecules/SelectorRow";

const ThemeSelector = (props) => {
  // TODO: programatically set options according to available theme options

  return (
    <SelectorRow
      label="Theme:"
      options={["auto", "light", "dark"]}
      defaultOption="auto"
    />
  );
};

export default ThemeSelector;
