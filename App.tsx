import React from "react";
import { NativeBaseProvider, StatusBar } from "native-base";
import { View, StyleSheet } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Routes } from "./src/routes";

import { THEM } from "./src/baseStyles/thems";

SplashScreen.preventAutoHideAsync();
export default function App() {
  React.useEffect(() => {
    setTimeout(() => {
      SplashScreen.hideAsync();
    }, 3000);
  }, []);
  return (
    <NativeBaseProvider theme={THEM}>
      <View style={styles.container}>
        <Routes />
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    marginTop: 30,
  },
});
