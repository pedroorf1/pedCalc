import React from "react";
import { Image, Box, VStack } from "native-base";

import { Header } from "../../components/Header";

import { StyleSheet } from "react-native";
import baseStyles from "../../baseStyles/styles.json";
//assets
import bg from "../../assets/imgs/splash.png";

export const Home = () => {
  return (
    <>
      <Header />
      <VStack
        flex={1}
        alignItems="center"
        p={5}
        w="100%"
        justifyContent="center"
        bg={baseStyles.bases.backgroundColor}
      >
        <Box style={styles.container}>
          <Image source={bg} alt="logo" flex={1} />
        </Box>
      </VStack>
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
