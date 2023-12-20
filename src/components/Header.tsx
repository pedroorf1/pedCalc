import React from "react";
import { View, StyleSheet } from "react-native";

import { HeaderMenuItem } from "./headerMenuItem";

import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../types/stackProps";
export const Header = () => {
  const navigation = useNavigation<propsStack>();
  return (
    <View style={styles.header}>
      <HeaderMenuItem
        text="Home"
        color="gray"
        size={16}
        icon="home"
        action={() => navigation.navigate("home")}
      />
      <HeaderMenuItem
        text="Formulas"
        color="gray"
        size={16}
        icon="calculator"
        action={() => navigation.navigate("formulas")}
      />
      <HeaderMenuItem
        text="Sobre"
        color="gray"
        size={16}
        icon="create"
        action={() => navigation.navigate("sobre")}
      />
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
    marginTop: -10,
    padding: 5,
    borderColor: "black",
    alignItems: "center",
  },
});
