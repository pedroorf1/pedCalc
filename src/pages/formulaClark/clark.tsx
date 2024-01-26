import React from "react";
import { View, ScrollView, StyleSheet, Text, TextInput } from "react-native";

import { styleMenu } from "../../baseStyles/menuPagesFormulasButtons";

import { GoToMenu } from "../../components/GoToMenu";

import { Header } from "../../components/Header";

export const Clark = () => {
  type TDataType = {
    idade?: number;
    peso?: number;
    altura?: number;
    sexo?: string;
    doseAdulta?: number;
    dosesDiarias?: number;
    resultado?: number;
  };

  const [result, setResult] = React.useState<number>(0);
  const [dataForCalc, setDataForCalc] = React.useState<TDataType>({
    peso: 0,
    doseAdulta: 0,
    dosesDiarias: 0,
  } as TDataType);

  const divisor = 70;

  const calc = () => {
    let _calc = (dataForCalc.peso * dataForCalc.doseAdulta) / divisor;
    setResult(() => Number(_calc.toFixed(2)));
  };

  return (
    <>
      <Header />
      <View style={styleMenu.safe}>
        <Text style={styleMenu.label}>EQUAÇÃO DE CLARK</Text>
        <ScrollView>
          <View>
            <Text style={styleMenu.label}>Qual o peso da criança em kg?</Text>
            <TextInput
              style={styleMenu.inputText}
              onChangeText={(value) =>
                setDataForCalc({
                  ...dataForCalc,
                  peso: parseInt(value),
                })
              }
              onChange={() => calc()}
              keyboardType="numeric"
              defaultValue="0"
            />
          </View>
          <View>
            <Text style={styleMenu.label}>
              Qual a dose adulta do medicamento?
            </Text>
            <TextInput
              style={styleMenu.inputText}
              onChangeText={(value) =>
                setDataForCalc({
                  ...dataForCalc,
                  doseAdulta: parseInt(value),
                })
              }
              onChange={() => calc()}
              keyboardType="numeric"
              defaultValue="0"
            />
          </View>
          <View>
            <Text style={styleMenu.label}>
              Qual a quantidade de doses diárias?
            </Text>
            <TextInput
              style={styleMenu.inputText}
              onChangeText={(value) =>
                setDataForCalc({
                  ...dataForCalc,
                  dosesDiarias: parseInt(value),
                })
              }
              onChange={() => calc()}
              keyboardType="numeric"
              defaultValue="0"
            />
          </View>
          <View style={styleMenu.resultado}>
            <Text style={styleMenu.title}>Resultado</Text>
            <Text style={styleMenu.textResultados}>
              Peso da Criança: {dataForCalc.peso} kg.
            </Text>
            <Text style={styleMenu.textResultados}>
              Dose adulta: {dataForCalc.doseAdulta}
            </Text>
            <Text style={styleMenu.textResultados}>
              Dosagem total encontrada
            </Text>
            <Text style={styleMenu.textResultadosDosagem}>{result}</Text>
            <Text style={styleMenu.textResultados}>Aplicação</Text>
            <Text style={styleMenu.textResultadosDosagem}>
              {result > 0 && dataForCalc.dosesDiarias > 0
                ? Number(result / dataForCalc.dosesDiarias).toFixed(3)
                : null}{" "}
              / {dataForCalc.dosesDiarias}X ao dia
            </Text>
          </View>
        </ScrollView>
        <GoToMenu />
      </View>
    </>
  );
};
