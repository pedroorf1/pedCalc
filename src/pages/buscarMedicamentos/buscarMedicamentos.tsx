import React from "react";
import { View, StyleSheet, Text } from "react-native";

import baseStyles from "../../baseStyles/styles.json";

import { styleMenu } from "../../baseStyles/menuPagesFormulasButtons";

import { GoToMenu } from "../../components/GoToMenu";
import { Header } from "../../components/Header";

export const Medicamentos = () => {
  return (
    <>
      <Header />
      <View style={styleMenu.safe}>
        <Text style={styleMenu.title}>Buscar medicamentos</Text>
        <GoToMenu />
      </View>
    </>
  );
};
