import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export const Header = () => {
  return (
    <View style={styles.header}>
      <TouchableOpacity>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Equações</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text>Sobre</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    height: 50,
    width: "100%",
    padding: 5,
    borderColor: "black",
    alignItems: "center",
  },
});
