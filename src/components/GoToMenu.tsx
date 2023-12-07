import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../types/stackProps";

export const GoToMenu = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("formulas")}>
      <Text style={styles.text}>Voltar</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 13,
    width: 100,
    textAlign: "center",
    color: "white",
    marginVertical: 8,
    lineHeight: 15,
    backgroundColor: "#FF00FF",
    padding: 5,
    borderRadius: 5,
  },
});
