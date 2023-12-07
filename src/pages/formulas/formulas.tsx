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
      <View style={styles.menu}>
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
          <RButton
            text="Buscar medicamentos"
            icon="magnet"
            iconColor="orange"
            action={() => navigation.navigate("medicamentos")}
          />
        </ScrollView>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: baseStyles.bases.backgroundColor,
  },
});
