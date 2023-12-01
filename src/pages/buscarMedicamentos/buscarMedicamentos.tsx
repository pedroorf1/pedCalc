import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Medicamentos = () => {
  return (
    <View style={styles.safe}>
      <Text>Buscar medicamentos</Text>
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
    backgroundColor: "#9932cc",
  },
});
