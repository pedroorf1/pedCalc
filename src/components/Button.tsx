import React from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";

type TProps = {
  text: string;
  action: () => any | void;
};

export const RButton = ({ text, action }: TProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.Rbutton}>
      <Text style={styles.RbuttonText}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Rbutton: {
    backgroundColor: "#1e90ff",
    color: "#f8f8ff",
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 8,
    height: 100,
  },
  RbuttonText: {
    color: "#f8f8ff",
    fontSize: 16,
  },
});
