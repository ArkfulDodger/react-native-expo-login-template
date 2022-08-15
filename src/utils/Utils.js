import { Platform, StatusBar } from "react-native";

// performs configuration work specific to different platforms
// for use on startup
export const configurePlatformSpecificSettings = () => {
  if (Platform.OS === "android") {
  }

  if (Platform.OS === "ios") {
  }
};

export const configureThemeSettings = (isDark) => {
  StatusBar.setBarStyle(isDark ? "light-content" : "dark-content");
  return;
};

// regex for email validation sourced from http://emailregex.com/
const emailRegex =
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

// returns whether the provided string is a valid email address
export const isValidEmail = (str) => {
  return emailRegex.test(str);
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

export const getRandomInt = (max) => {
  return Math.floor(Math.random() * max);
};
