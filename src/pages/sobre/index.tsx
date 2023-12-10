import React from "react";
import { View, ScrollView, Text } from "react-native";
import { Header } from "../../components/Header";

import { StyleSheet } from "react-native";

import baseStyles from "../../baseStyles/styles.json";

export const Sobre = () => {
  return (
    <>
      <Header />
      <ScrollView style={styles.container}>
        <Text style={styles.title}>Sobre o Aplicativo PedCalc</Text>
        <Text style={styles.paragraphe}>
          Bem-vindo ao PedCalc, fruto da colaboração apaixonada de dois
          desenvolvedores independentes comprometidos em proporcionar segurança
          e precisão no universo farmacêutico. Este aplicativo inovador nasceu
          da fusão de expertise técnica e uma visão compartilhada de facilitar o
          cálculo preciso de doses de produtos farmacêuticos.
        </Text>

        <Text style={styles.title}>Principais Recursos:</Text>
        <Text style={styles.paragraphe}>
          Precisão Garantida: Desenvolvido com algoritmos avançados, o PedCalc
          assegura cálculos de dosagem precisos, promovendo a administração
          segura de medicamentos.
        </Text>
        <Text style={styles.paragraphe}>
          Interface Intuitiva: A experiência do usuário foi cuidadosamente
          projetada para ser intuitiva, permitindo que profissionais de saúde e
          pacientes utilizem o aplicativo com facilidade.
        </Text>
        <Text style={styles.paragraphe}>
          Colaboração Independente: Criado por desenvolvedores independentes, o
          PedCalc reflete a paixão e a dedicação de uma equipe comprometida em
          oferecer soluções inovadoras para desafios na área da saúde.
        </Text>
        <Text style={styles.paragraphe}>
          Atualizações Contínuas: Estamos comprometidos com a melhoria
          constante. O PedCalc receberá atualizações regulares para incorporar
          avanços na pesquisa médica e tecnológica, mantendo-se sempre à frente.
        </Text>
        <Text style={styles.paragraphe}>
          Privacidade e Segurança: Priorizamos a privacidade dos usuários. O
          PedCalc segue os mais altos padrões de segurança de dados, garantindo
          a confidencialidade das informações inseridas.
        </Text>
        <Text style={styles.paragraphe}>
          Contato realmente personalizado: Estamos disponibilizando nossos 
          contatos pessoais para que os suários possam colaborar, dando dicas, 
          criticando e atuando conosco diretamente no desenvolvimento do
          aplicativo.
        </Text>
        <Text style={styles.paragraphe}>
          O PedCalc é mais do que um aplicativo, é um compromisso com a saúde e
          a segurança, resultado da paixão de dois desenvolvedores independentes
          em criar uma ferramenta essencial para profissionais de saúde e
          pacientes. Baixe agora e experimente uma nova era de precisão na
          administração de doses farmacêuticas.
        </Text>
        <View style={styles.containerContato}>
          <Text style={styles.TitleItemContato}>Atencisamente:</Text>
          <Text style={styles.itemContato}>Pedro Ribeiro</Text>
          <Text style={styles.itemContato}>Halain Trabulsi</Text>
          <Text style={styles.TitleItemContato}>contatos:</Text>
          <Text style={styles.itemContato}>pedroorf@gmail.com</Text>
          <Text style={styles.itemContato}>halainrtrabulsi@gmail.com</Text>
        </View>
      </ScrollView>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
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
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 25,
    marginBottom: 10,
  },
  containerContato: {
    display: "flex",
    flex: 1,
    backgroundColor: "black",
    color: "white",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 100,
  },
  TitleItemContato: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
    marginTop: 25,
  },
  itemContato: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
    marginVertical: 8,
  },
});
