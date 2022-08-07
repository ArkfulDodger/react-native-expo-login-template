import { StyleSheet } from "react-native";
import { colors } from "./colors";

export const styles = StyleSheet.create({
  // fill the parent container
  fillContainer: {
    flex: 1,
  },

  pageMargins: {
    marginHorizontal: 15,
    marginVertical: 10,
  },

  spreadColumn: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-between",
    alignItems: "center",
  },

  spreadRow: {
    alignSelf: "stretch",
    flexDirection: "row",
    justifyContent: "space-between",
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
    backgroundColor: colors.inputBackground,
  },

  // auth page buttons
  authButton: {
    alignSelf: "stretch",
  },

  // remove padding and margins
  noPaddingNoMargin: {
    padding: 0,
    margin: 0,
  },
});
