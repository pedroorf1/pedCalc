import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { propsStack } from "../../types/stackProps";
import { RButton } from "../../components/Button";
import baseStyles from "../../baseStyles/styles.json";

import { Header } from "../../components/Header";

export default function Formulas() {
  const navigation = useNavigation<propsStack>();

  return (
    <>
      <Header />
      <View style={styles.alertContainer}>
        <Text style={styles.alertText}>
          O uso destas fórmulas implica na concordância dos termos. Acesse o
          termos clicando{" "}
          <Text
            style={styles.link}
            onPress={() => navigation.navigate("termos")}
          >
            aqui.
          </Text>
        </Text>
      </View>
      <View style={styles.formulasContainer}>
        <ScrollView>
          <RButton
            text="Young"
            icon="share"
            iconColor="orange"
            description="Baseado na idade em anos"
            action={() => navigation.navigate("young")}
          />
          <RButton
            text="Clark"
            icon="share"
            iconColor="orange"
            description="Baseado no peso em kg"
            action={() => navigation.navigate("clark")}
          />
          <RButton
            text="Fiend"
            icon="share"
            iconColor="orange"
            description="Baseado na idade em meses"
            action={() => navigation.navigate("fried")}
          />
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  formulasContainer: {
    flex: 1,
    backgroundColor: baseStyles.bases.backgroundColor,
    verticalAlign: "middle",
  },
  alertContainer: {
    backgroundColor: "orange",
  },
  alertText: {
    padding: 10,
    color: "white",
    fontSize: 18,
    textAlign: "justify",
  },
  link: {
    padding: 10,
    color: "#FF1493",
    fontSize: 18,
    textAlign: "justify",
    cursor: "pointer",
  },
});
