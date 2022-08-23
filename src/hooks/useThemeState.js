import { useState, useEffect } from "react";
import useSystemTheme from "./useSystemTheme";
import { themes } from "../theme/themes";
import * as utils from "../utils/utils";

// establish a theme in state, and configure theme settings each time it is changed
export default useThemeState = () => {
  const [theme, setTheme] = useState(themes[useSystemTheme()]);

  // reconfigure necesary theme settings on each theme update
  useEffect(() => {
    utils.configureThemeSettings(theme.dark);
  }, [theme]);

  return { theme: theme, setTheme: setTheme };
};
