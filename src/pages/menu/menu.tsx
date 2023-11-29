import { View, Text, StyleSheet } from "react-native";
import { RButton } from "../../components/Button";
import { Navigation } from "react-native-navigation";

import { Young } from "../../pages/formulaYoung/young";
import { Fried } from "../../pages/formulaFried/fried";
import { Clark } from "../../pages/formulaClark/clark";

export default function Menu(props) {
  return (
    <View>
      <Text style={styles.title}>
        Para p cálculo de dosagens você pode utilizar umas das equações abaixo
        de acordo a especificidade.
      </Text>
      <View>
        <RButton
          text="Young"
          action={() => {
            <Young />;
          }}
        />
        <RButton text="Clark" action={() => {}} />
        <RButton text="Fiend" action={() => {}} />
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
});
