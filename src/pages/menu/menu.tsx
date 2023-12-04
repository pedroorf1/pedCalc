import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { propsStack } from "../../types/stackProps";

import { RButton } from "../../components/Button";
import baseStyles from "../../baseStyles/styles.json";

export default function Menu() {
  const navigation = useNavigation<propsStack>();

  return (
    <View style={styles.menu}>
      <Text style={styles.title}>
        Para o cálculo de dosagens você pode utilizar umas das equações abaixo
        de acordo a especificidade.
      </Text>
      <ScrollView>
        <RButton text="Young" action={() => navigation.navigate("young")} />
        <RButton text="Clark" action={() => navigation.navigate("clark")} />
        <RButton text="Fiend" action={() => navigation.navigate("fried")} />
        <RButton
          text="Buscar medicamentos"
          action={() => navigation.navigate("medicamentos")}
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
    marginTop: 50,
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
