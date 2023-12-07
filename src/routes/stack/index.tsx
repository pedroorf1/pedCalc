import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Formulas from "../../pages/formulas/formulas";
import { Clark } from "../../pages/formulaClark/clark";
import { Fried } from "../../pages/formulaFried/fried";
import { Young } from "../../pages/formulaYoung/young";
import { Medicamentos } from "../../pages/buscarMedicamentos/buscarMedicamentos";

import { Home } from "../../pages/home";
import { Sobre } from "../../pages/sobre";
import { propsNavigationStack } from "../../types/stackProps";

const { Navigator, Screen } =
  createNativeStackNavigator<propsNavigationStack>();

export const Stack = () => {
  return (
    <Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
      <Screen name="home" component={Home} />
      <Screen name="sobre" component={Sobre} />
      <Screen name="young" component={Young} />
      <Screen name="clark" component={Clark} />
      <Screen name="fried" component={Fried} />
      <Screen name="medicamentos" component={Medicamentos} />
      <Screen name="formulas" component={Formulas} />
    </Navigator>
  );
};
