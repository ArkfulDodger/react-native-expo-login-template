// REACT/EXPO -------------------------------------------------------
import { useContext } from "react";
// SYSTEM -----------------------------------------------------------
import { themes } from "../../theme/themes";
// HOOKS ------------------------------------------------------------
import useSystemTheme from "../../hooks/useSystemTheme";
import { ThemeContext } from "../../contexts/GlobalContexts";
// COMPONENTS -------------------------------------------------------
import SelectorRow from "../molecules/SelectorRow";

const ThemeSelector = (props) => {
  const setTheme = useContext(ThemeContext);

  const onChange = (newTheme) => {
    switch (newTheme) {
      case "auto":
        setTheme(themes[useSystemTheme()]);
        break;
      case "light":
        setTheme(themes.lightTheme);
        break;
      case "dark":
        setTheme(themes.darkTheme);
        break;
      default:
        console.error("invalid theme selected");
        break;
    }
  };

  return (
    <SelectorRow
      label="Theme:"
      options={["auto", "light", "dark"]}
      defaultOption="auto"
      onChange={onChange}
    />
  );
};

export default ThemeSelector;
