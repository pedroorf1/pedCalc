import React from "react";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Routes } from "./src/routes";

SplashScreen.preventAutoHideAsync();
export default function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);
  }, []);
  return (
    <View style={styles.container}>
      <Routes />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: 30,
  },
});
