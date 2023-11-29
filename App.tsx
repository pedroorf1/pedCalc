import { StatusBar } from "expo-status-bar";
import { View, StyleSheet } from "react-native";
import Menu from "./src/pages/menu/menu";
export default function App() {
  return (
    <View style={styles.safe}>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    display: "flex",
    marginTop: -5,
    marginBottom: -10,
    padding: 15,
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
    backgroundColor: "#9932cc",
  },
});
