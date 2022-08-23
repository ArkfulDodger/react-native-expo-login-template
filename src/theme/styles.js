import { StyleSheet } from "react-native";
import useFadeSlide from "../hooks/useFadeSlide";
import fonts from "./fonts";

const forSlide = useFadeSlide();

export const styles = StyleSheet.create({
  //#region CONTAINERS --------------------------------------------------------

  // fill the parent container
  fillContainer: {
    flex: 1,
  },

  // container with items centered on both axes
  centered: {
    alignItems: "center",
    justifyContent: "center",
  },

  // container with items centered in a column of evenly spaced items
  spreadColumn: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // container of parent's width with items in a centered column
  centeredColumn: {
    alignSelf: "stretch",
    flexDirection: "column",
    alignItems: "center",
  },

  // container with items centered in a row of evenly spaced items
  spreadRow: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // container with items centered in a row of evenly spaced items (space around)
  spacedRow: {
    alignSelf: "stretch",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },

  // container of parent's width with items centered vertically in an evenly spaced row
  centeredRow: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  // container with items centered verically in a row
  row: {
    alignItems: "center",
    flexDirection: "row",
  },

  //#endregion

  //#region LAYOUT ------------------------------------------------------------

  // standard margin to pad from screen edges to content
  pageMargins: {
    marginHorizontal: 15,
    marginVertical: 15,
  },

  // remove padding and margins
  noPaddingNoMargin: {
    padding: 0,
    margin: 0,
  },

  //#endregion

  //#region IMAGES ------------------------------------------------------------

  // profile pic size
  profilePic: {
    width: 50,
    height: 50,
  },

  // styling for title image implementations
  titleImage: {
    marginVertical: 40,
  },

  buttonAvatarImage: {
    borderRadius: 0,
    margin: 5,
    backgroundColor: "transparent",
  },

  //#endregion

  //#region INPUTS ------------------------------------------------------------

  // auth page text input styling
  authInput: {
    alignSelf: "stretch",
    fontSize: fonts.size.font20,
  },

  //#endregion

  //#region BUTTONS -----------------------------------------------------------

  // primary auth page buttons
  authButton: {
    alignSelf: "stretch",
    padding: 3,
    marginVertical: 10,
    elevation: 6,
  },

  // primary auth page buttons (when disabled)
  authButtonDisabled: {
    alignSelf: "stretch",
    padding: 3,
    marginVertical: 10,
  },

  // the text for primary auth page buttons
  authButtonText: {
    fontSize: fonts.size.font24,
    fontFamily: fonts.type.defaultLight,
    marginVertical: 9,
    marginHorizontal: 16,
  },

  // auth page text-only buttons
  textButton: {
    padding: 5,
  },

  // the text for auth page text-only buttons
  textButtonText: {
    fontSize: fonts.size.font16,
    fontFamily: fonts.type.defaultLight,
  },

  //#endregion

  //#region NAVIGATION --------------------------------------------------------

  defaultStackOptions: {
    headerShown: false,
    cardStyleInterpolator: forSlide,
    presentation: "modal",
  },

  //#endregion
});
