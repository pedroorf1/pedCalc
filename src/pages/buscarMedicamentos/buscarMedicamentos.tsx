import React from "react";
import { View, StyleSheet, Text } from "react-native";

import baseStyles from "../../baseStyles/styles.json";
import { GoToMenu } from "../../components/GoToMenu";

export const Medicamentos = () => {
  return (
    <View style={styles.safe}>
      <Text style={styles.title}>Buscar medicamentos</Text>
      <GoToMenu />
    </View>
  );
};

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
    color: baseStyles.bases.color,
  },
  title: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: baseStyles.bases.backgroundColor,
    color: baseStyles.bases.color,
  },
});
