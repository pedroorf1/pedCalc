import React from "react";
import { View, StyleSheet } from "react-native";

import baseStyles from "./src/baseStyles/styles.json";

import Menu from "./src/pages/menu/menu";
import { Young } from "./src/pages/formulaYoung/young";
import { Fried } from "./src/pages/formulaFried/fried";
import { Clark } from "./src/pages/formulaClark/clark";
import { Medicamentos } from "./src/pages/buscarMedicamentos/buscarMedicamentos";

export default function App() {
  return <View style={styles.safe}></View>;
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
