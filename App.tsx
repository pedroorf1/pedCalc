import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { View, StyleSheet } from "react-native";

import Menu from "./src/pages/menu/menu";
import { Young } from "./src/pages/formulaYoung/young";
import { Fried } from "./src/pages/formulaFried/fried";
import { Clark } from "./src/pages/formulaClark/clark";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <View style={styles.safe}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Menu">
          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              title: "Menu",
              headerStyle: {
                backgroundColor: "#000080",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Young"
            component={Young}
            options={{
              title: "Young",
              headerStyle: {
                backgroundColor: "#000080",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Fried"
            component={Fried}
            options={{
              title: "Fried",
              headerStyle: {
                backgroundColor: "#000080",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
          <Stack.Screen
            name="Clark"
            component={Clark}
            options={{
              title: "Clark",
              headerStyle: {
                backgroundColor: "#000080",
              },
              headerTintColor: "#fff",
              headerTitleStyle: {
                fontWeight: "bold",
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  safe: {
    display: "flex",
    marginTop: -5,
    marginBottom: -10,
    padding: 15,
    paddingTop: 30,
    flex: 1,
    fontSize: 20,
    textAlign: "center",
    marginVertical: 8,
    backgroundColor: "#9932cc",
  },
});
