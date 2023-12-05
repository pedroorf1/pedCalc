import React from "react";
import { View, ScrollView, StyleSheet, Text, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { styleMenu } from "../../baseStyles/menuPagesFormulasButtons";

import { GoToMenu } from "../../components/GoToMenu";

export const Young = () => {
  type TDataType = {
    idade?: number;
    peso?: number;
    altura?: number;
    sexo?: string;
    doseAdulta?: number;
    resultado?: number;
  };

  const navigation = useNavigation();
  const [dataForCalc, setDataForCalc] = React.useState<TDataType>({
    idade: 0,
    doseAdulta: 0,
  } as TDataType);

  const [result, setResult] = React.useState(0);

  const globalRegex = new RegExp(/[a-zA-Z@$&_]/, "g");
  const idadeAdicional = 12;

  React.useEffect(() => {
    let calc =
      (dataForCalc.idade / (dataForCalc.idade + idadeAdicional)) *
      dataForCalc.doseAdulta;
    calc = Number(calc.toFixed(2));
    setResult(calc);
  }, [dataForCalc]);

  return (
    <View style={styleMenu.safe}>
      <ScrollView>
        <View>
          <Text style={styleMenu.label}>Qual a idade da criança em anos?</Text>
          <TextInput
            style={styleMenu.inputText}
            onChangeText={(idade) =>
              setDataForCalc({
                ...dataForCalc,
                idade:
                  !globalRegex.test(idade) && idade != "" ? parseInt(idade) : 0,
              })
            }
            defaultValue="0"
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
            defaultValue="0"
          />
        </View>
        <View style={styleMenu.resultado}>
          <Text style={styleMenu.title}>Resultado</Text>
          <Text style={styleMenu.textResultados}>
            Idade da Criança: {dataForCalc.idade} anos
          </Text>
          <Text style={styleMenu.textResultados}>
            Dose adulta: {dataForCalc.doseAdulta}
          </Text>
          <Text style={styleMenu.textResultados}>Dosagem encontrada</Text>
          <Text style={styleMenu.textResultadosDosagem}>{result}</Text>
        </View>
      </ScrollView>
      <GoToMenu />
    </View>
  );
};
