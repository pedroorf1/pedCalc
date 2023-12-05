import React from "react";
import { View, StyleSheet } from "react-native";

import baseStyles from "./src/baseStyles/styles.json";

import { Routes } from "./src/routes";

export default function App() {
  return <Routes />;
}

const styles = StyleSheet.create({
  safe: {
    display: "flex",
    marginTop: -5,
    marginBottom: -10,
    padding: 15,
    paddingTop: 30,
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
    backgroundColor: baseStyles.bases.backgroundColor,
  },
});
