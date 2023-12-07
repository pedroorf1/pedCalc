import React from "react";
import { View, Text, Image } from "react-native";
import { Header } from "../../components/Header";

import { StyleSheet } from "react-native";
import baseStyles from "../../baseStyles/styles.json";
//assets
import bg from "../../assets/splash.png";
import loader from "../../assets/loader.gif";

export const Home = () => {
  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    if (bg) {
      setLoading(false);
    }
  }, [bg]);

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Image source={bg} alt="bg" />
      </View>
    );
  }

  return (
    <>
      <Header />
      <View style={styles.container}>
        <Text style={styles.text}>Home</Text>
        <Image source={loader} alt="loader" />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
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
  text: {
    color: baseStyles.bases.color,
  },
});
