import React from "react";
import { View, Text, StyleSheet } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <Text>Voltar</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 30,
    marginTop: 25,
    width: "100%",
    padding: 5,
    borderWidth: 1,
    borderColor: "black",
  },
});
