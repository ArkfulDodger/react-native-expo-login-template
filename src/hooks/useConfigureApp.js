import * as utils from "../utils/utils";
import useFonts from "../hooks/useFonts";

// TODO: convert to Promise.all system as additional configurations/hooks are required

export default useConfigureApp = async () => {
  try {
    utils.configurePlatformSpecificSettings();
    await useFonts();
  } catch (e) {
    console.warn(e);
  }
};
