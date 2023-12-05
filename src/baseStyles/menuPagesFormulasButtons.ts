import { StyleSheet } from "react-native";

import baseStyles from "./styles.json";
export const styleMenu = StyleSheet.create({
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
    backgroundColor: baseStyles.bases.backgroundColor,
    color: baseStyles.bases.color,
  },

  inputText: {
    height: "auto",
    fontSize: 20,
    borderColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    padding: 15,
    color: "white",
    backgroundColor: "black",
    marginVertical: 10,
  },
  label: {
    width: "100%",
    fontSize: 15,
    borderColor: "white",
    color: "white",
    marginTop: 15,
  },
  resultado: {
    display: "flex",
    width: "100%",
    fontSize: 20,
    textAlign: "center",
    marginVertical: 5,
    backgroundColor: "#000080",
    borderRadius: 10,
    color: baseStyles.bases.color,
    padding: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    color: baseStyles.bases.color,
  },
  textResultados: {
    fontSize: 18,
    textAlign: "center",
    color: baseStyles.bases.color,
    marginVertical: 8,
    lineHeight: 30,
  },
  textResultadosDosagem: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
    color: baseStyles.bases.color,
    marginVertical: 8,
    lineHeight: 30,
    backgroundColor: "#FF00FF",
    padding: 15,
    borderRadius: 10,
  },
});
