import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

import baseStyles from "../../baseStyles/styles.json";

import { GoToMenu } from "../../components/GoToMenu";
import { Header } from "../../components/Header";

export const Termos = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Termos de uso</Text>
        <Text style={styles.paragraphe}>
          Um dos princípios fundamentais para um bom exercício profissional,
          principalmente no âmbito da medicina e saúde, é o cuidado dispensado
          às pessoas, através de uma assistência ágil, precisa e segura. Diante
          disso, começamos a desenvolver uma aplicação que venha suprir, ao
          menos no que se propões, essa ecessidade.
        </Text>
        <Text style={styles.paragraphe}>
          PedCalc - Calculadora de Dose Pediátrica, foi pensado para os
          profissionais médicos e afins, bem como aos estudantes da área da
          saúde. Com o aplicativo PedCalc, tanto o pediatra como os demais
          profissionais, terão grandes benefícios como a diminuição da
          possibilidade de erros de dosagens, maior agilidade, diminuindo o
          tempo dispensado com fórmulas, além da praticidade e do conforto do
          usuário Por mais que os cálculos nos dê uma exatidão matemática, no
          que se refere a dosagem, outros aspectos devem ser considerados para a
          eficácia da dose administrada.Somente um profissional habilitado
          poderá discernir as variáveis.
        </Text>
        <Text style={styles.paragrapheAlert}>
          Alguns medicamentos já apresentam em sua bula os valores a serem
          utilizados para cada faixa etária e/ou peso. Isso deve ser levado em
          consideração caso essas informações estejam à mão. Como mencionado
          aspectos como estado geral, nutricional, morbidades e alterações
          metabólicas e ou funcionais, devem ser avaliados, bem como interações
          medicamentosas e outros.
        </Text>
        <Text style={styles.paragraphe}>
          O aplicativo PedCalc, em hipótese alguma deve ser utilizado por
          pessoas não qualificadas, bem como não substituirá a acurácia e a
          visão holística do profissional. Ele serve, como mencionado, apenas
          como ferramenta auxiliar, e seu uso é de total responsabilidade por
          parte do usuário.
        </Text>
        <GoToMenu />
        <Text style={styles.paragraphe}></Text>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    padding: 15,
    backgroundColor: "black",
    color: baseStyles.bases.color,
  },
  paragraphe: {
    color: "white",
    fontSize: 16,
    textAlign: "justify",
    marginVertical: 8,
    lineHeight: 25,
  },
  paragrapheAlert: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    fontStyle: "italic",
    textAlign: "justify",
    marginVertical: 8,
    marginTop: 25,
    lineHeight: 25,
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 25,
  },
});
