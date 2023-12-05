import { View, ScrollView, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

import { propsStack } from "../../types/stackProps";
import { RButton } from "../../components/Button";
import baseStyles from "../../baseStyles/styles.json";

export default function Menu() {
  const navigation = useNavigation<propsStack>();

  return (
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
  );
}
const styles = StyleSheet.create({
  message: {
    width: "100%",
    color: "#f8f8f8",
    fontSize: 25,
    textAlign: "justify",
    marginVertical: 16,
    marginTop: 30,
    padding: 10,
    backgroundColor: "#000080",
    lineHeight: 30,
  },
  menu: {
    flex: 1,
    backgroundColor: baseStyles.bases.backgroundColor,
  },
  iconn: {
    padding: 30,
  },
});
