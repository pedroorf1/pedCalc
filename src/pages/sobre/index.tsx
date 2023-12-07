import React from "react";
import { View, Text } from "react-native";
import { Header } from "../../components/Header";

import { StyleSheet } from "react-native";

import baseStyles from "../../baseStyles/styles.json";

export const Sobre = () => {
  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Sobre</Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
  text: {
    color: baseStyles.bases.color,
  },
});
