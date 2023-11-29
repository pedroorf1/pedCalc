import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Fried = () => {
  return (
    <View style={styles.title}>
      <Text>Freid</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    display: "flex",
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
  },
});
