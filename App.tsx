import React from "react";
import { ScrollView } from "react-native";
import { Routes } from "./src/routes";

import { Header } from "./src/components/Header";

export default function App() {
  return (
    <>
      <Header />
      <Routes />
    </>
  );
}
