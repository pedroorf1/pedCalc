import React from "react";
import { View, StyleSheet, Text } from "react-native";

import baseStyles from "../../baseStyles/styles.json";

export const Clark = () => {
  return (
    <View style={styles.safe}>
      <Text>Clark</Text>
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
  },
});
