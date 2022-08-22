import { StyleSheet, Platform } from "react-native";
import useFadeSlide from "../hooks/useFadeSlide";
import fonts from "./fonts";

const forSlide = useFadeSlide();

export const styles = StyleSheet.create({
  // fill the parent container
  fillContainer: {
    flex: 1,
  },

  pageMargins: {
    marginHorizontal: 15,
    marginVertical: 15,
  },

  spreadColumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  centeredColumn: {
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "stretch",
  },

  spreadRow: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  spacedRow: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  centeredRow: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  row: {
    alignItems: "center",
    flexDirection: "row",
  },

  // center on both axes
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },

  // profile pic size for demo purposes
  profilePic: {
    width: 50,
    height: 50,
  },

  // styling for title image implementations
  titleImage: {
    marginVertical: 40,
  },

  // auth page text input styling
  authInput: {
    alignSelf: "stretch",
    fontSize: fonts.size.font20,
  },

  // auth page buttons
  authButton: {
    alignSelf: "stretch",
    padding: 3,
    marginVertical: 10,
    elevation: 6,
  },

  // auth page buttons
  authButtonDisabled: {
    alignSelf: "stretch",
    padding: 3,
    marginVertical: 10,
  },

  // auth page button text
  authButtonText: {
    fontSize: fonts.size.font24,
    fontFamily: fonts.type.defaultLight,
    marginVertical: 9,
    marginHorizontal: 16,
  },

  // auth page buttons
  textButton: {
    padding: 5,
  },

  // text page button text
  textButtonText: {
    fontSize: fonts.size.font16,
    fontFamily: fonts.type.defaultLight,
  },

  // remove padding and margins
  noPaddingNoMargin: {
    padding: 0,
    margin: 0,
  },

  defaultStackOptions: {
    headerShown: false,
    cardStyleInterpolator: forSlide,
    presentation: "modal",
  },

  buttonAvatarImage: {
    borderRadius: 0,
    margin: 5,
    backgroundColor: "transparent",
  },
});
