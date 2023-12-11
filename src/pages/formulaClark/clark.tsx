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

  const [result, setResult] = React.useState(0);
  const [dataForCalc, setDataForCalc] = React.useState<TDataType>({
    peso: 0,
    doseAdulta: 0,
    dosesDiarias: 0,
  } as TDataType);
  const refPeso = React.useRef();
  const refDoseAdulta = React.useRef();
  const refDoseDiaria = React.useRef();

  const globalRegex = new RegExp(/[a-zA-Z@$&_]/, "g");
  const divisor = 70;

  React.useEffect(() => {
    let calc = (dataForCalc.peso / divisor) * dataForCalc.doseAdulta;
    calc = Number(calc.toFixed(2));
    setResult(calc);
  }, [dataForCalc]);

  return (
    <>
      <Header />
      <View style={styleMenu.safe}>
        <ScrollView>
          <View>
            <Text style={styleMenu.label}>Qual o peso da criança em kg?</Text>
            <TextInput
              style={styleMenu.inputText}
              onChangeText={(peso) =>
                setDataForCalc({
                  ...dataForCalc,
                  peso:
                    !globalRegex.test(peso) && peso != "" ? parseInt(peso) : 0,
                })
              }
              keyboardType="numeric"
              defaultValue="0"
              ref={refPeso}
            />
          </View>
          <View>
            <Text style={styleMenu.label}>
              Qual a dose adulta do medicamento?
            </Text>
            <TextInput
              style={styleMenu.inputText}
              onChangeText={(doseAdulta) =>
                setDataForCalc({
                  ...dataForCalc,
                  doseAdulta:
                    !globalRegex.test(doseAdulta) && doseAdulta != ""
                      ? parseInt(doseAdulta)
                      : 0,
                })
              }
              keyboardType="numeric"
              defaultValue="0"
              ref={refDoseAdulta}
            />
          </View>
          <View>
            <Text style={styleMenu.label}>
              Qual a quantidade de doses diárias?
            </Text>
            <TextInput
              style={styleMenu.inputText}
              onChangeText={(doses) =>
                setDataForCalc({
                  ...dataForCalc,
                  dosesDiarias:
                    !globalRegex.test(doses) && doses != ""
                      ? parseInt(doses)
                      : 0,
                })
              }
              keyboardType="numeric"
              defaultValue="0"
              ref={refDoseDiaria}
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
              {result & dataForCalc.dosesDiarias
                ? Number(result / dataForCalc.dosesDiarias).toFixed(2)
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
