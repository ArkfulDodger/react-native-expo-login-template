import { Platform } from "react-native";

// performs configuration work specific to different platforms
// for use on startup
export const configurePlatformSpecificSettings = () => {
  if (Platform.OS === "android") {
  }

  if (Platform.OS === "ios") {
  }
};

// returns whether the provided string is a valid email address
export const isValidEmail = (str) => {
  // TODO: write email validation
  console.log("auto-approved email validation");
  return true;
};

// will toggle the provided (bool) state ONLY if all of its conditions indicate it should change
// optionally: treat bool as true if ANY provided conditions are true, as opposed to default ALL
export const updateBoolStateConditionally = ({
  state,
  setter: setState,
  conditions,
  isAllMustBeTrue = true,
}) => {
  let isStateTrue = false;

  // test array of conditions for truthiness, or take bool value
  if (Array.isArray(conditions)) {
    for (let i = 0; i < conditions.length; i++) {
      const isConditionMet = conditions[i];

      if (isConditionMet) {
        isStateTrue = true;
        if (!isAllMustBeTrue) {
          break;
        }
      } else if (!isConditionMet) {
        isStateTrue = false;
        if (isAllMustBeTrue) {
          break;
        }
      }
    }
  } else {
    isStateTrue = conditions;
  }

  // change the bool state if needed
  if (!state && isStateTrue) {
    setState(true);
  } else if (state && !isStateTrue) {
    setState(false);
  }
};
