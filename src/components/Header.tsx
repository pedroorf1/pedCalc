import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { HeaderMenuItem } from "./headerMenuItem";

export const Header = () => {
  return (
    <View style={styles.header}>
      {/* <TouchableOpacity>
        <Ionicons name="home" color="gray" size={16}>
          <Text>Home</Text>
        </Ionicons>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="calculator" color="gray" size={16}>
          <Text>Equações</Text>
        </Ionicons>
      </TouchableOpacity>
      <TouchableOpacity>
        <Ionicons name="home" color="gray" size={16}>
          <Text>Sobre</Text>
        </Ionicons>
      </TouchableOpacity> */}
      <HeaderMenuItem text="Home" color="gray" size={16} icon="home" />
      <HeaderMenuItem
        text="Formulas"
        color="gray"
        size={16}
        icon="calculator"
      />
      <HeaderMenuItem text="Sobre" color="gray" size={16} icon="create" />
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
