import React from "react";
import { View, StyleSheet, Text } from "react-native";

export const Young = () => {
  return (
    <View style={styles.title}>
      <Text>Young</Text>
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
