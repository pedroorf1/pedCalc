import { View, ScrollView, Text, StyleSheet } from "react-native";
import { RButton } from "../../components/Button";

import baseStyles from "../../baseStyles/styles.json";

import { Young } from "../../pages/formulaYoung/young";
import { Fried } from "../../pages/formulaFried/fried";
import { Clark } from "../../pages/formulaClark/clark";
import { Medicamentos } from "../../pages/buscarMedicamentos/buscarMedicamentos";

export default function Menu({ navigation }) {
  return (
    <View style={styles.menu}>
      <Text style={styles.title}>
        Para o cálculo de dosagens você pode utilizar umas das equações abaixo
        de acordo a especificidade.
      </Text>
      <ScrollView>
        <RButton
          text="Young"
          action={() => {
            navigation.navigate("Young");
          }}
        />
        <RButton
          text="Clark"
          action={() => {
            navigation.navigate("Clark");
          }}
        />
        <RButton
          text="Fiend"
          action={() => {
            navigation.navigate("Fried");
          }}
        />
        <RButton
          text="Buscar medicamentos"
          action={() => {
            navigation.navigate("Medicamentos");
          }}
        />
      </ScrollView>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    width: "100%",
    color: "#f8f8f8",
    fontSize: 20,
    textAlign: "justify",
    marginVertical: 16,
    padding: 10,
    backgroundColor: "#9932ee",
    borderRadius: 10,
    lineHeight: 30,
  },
  menu: {
    flex: 1,
    backgroundColor: baseStyles.bases.backgroundColor,
  },
});
