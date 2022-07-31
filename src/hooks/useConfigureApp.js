import * as utils from "../utils/utils";
import useFonts from "../hooks/useFonts";

export default useConfigureApp = async () => {
  // const configure = async () => {
  try {
    await useFonts();
    // await new Promise((resolve) => setTimeout(resolve, 2000));
  } catch (e) {
    console.warn(e);
  }
  // };

  // return await configure();

  // console.log("configuring...");
  // await useFonts();
  // console.log("fonts loaded...");
  // return;
  // try {
  //   utils.configurePlatformSpecificSettings();
  //   await useFonts();
  // } catch (e) {
  //   console.warn(e);
  // }
};
