import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "black",
  },
  title: {
    flex: 1,
    fontSize: 42,
    textAlign: "center",
    textAlignVertical: "center",
    fontWeight: "bold",
    color: "white",
    marginBottom: "15%",
  },
  dropdown: {
    position: 'absolute',
    backgroundColor: '#fff',
    top: 50,
  }
});