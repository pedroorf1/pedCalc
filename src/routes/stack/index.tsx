import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Menu from "../../pages/menu/menu";
import { Clark } from "../../pages/formulaClark/clark";
import { Fried } from "../../pages/formulaFried/fried";
import { Young } from "../../pages/formulaYoung/young";
import { Medicamentos } from "../../pages/buscarMedicamentos/buscarMedicamentos";
import { propsNavigationStack } from "../../types/stackProps";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export const Stack = () => {
  return (
    <Navigator initialRouteName="menu" screenOptions={{ headerShown: false }}>
      <Screen name="young" component={Young} />
      <Screen name="clark" component={Clark} />
      <Screen name="fried" component={Fried} />
      <Screen name="medicamentos" component={Medicamentos} />
      <Screen name="menu" component={Menu} />
    </Navigator>
  );
};
