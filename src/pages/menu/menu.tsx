import { View, Text, StyleSheet } from "react-native";
import { RButton } from "../../components/Button";
import { Navigation } from "react-native-navigation";

import { Young } from "../../pages/formulaYoung/young";
import { Fried } from "../../pages/formulaFried/fried";
import { Clark } from "../../pages/formulaClark/clark";

export default function Menu({ navigation }) {
  return (
    <View style={styles.menu}>
      <Text style={styles.title}>
        Para p cálculo de dosagens você pode utilizar umas das equações abaixo
        de acordo a especificidade.
      </Text>
      <View>
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
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  title: {
    width: "100%",
    color: "#f8f8f8",
    fontSize: 14,
    textAlign: "center",
    marginVertical: 8,
  },
  menu: {
    backgroundColor: "#9932cc",
  },
});
