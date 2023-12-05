import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

type TProps = {
  text: string;
  description?: string;
  action: () => any | void;
  bstyles?: StyleSheet | any;
  icon?: any;
  iconColor?: string;
  iconSize?: number;
};

export const RButton = ({
  text,
  description,
  action,
  icon,
  iconColor,
  iconSize = 24,
}: TProps) => {
  return (
    <TouchableOpacity onPress={action} style={styles.Rbutton}>
      <Text style={styles.RbuttonText}>
        {icon ? (
          <Ionicons
            name={icon}
            color={iconColor}
            size={iconSize}
            style={styles.RbuttonIcon}
          />
        ) : null}
        {text}
      </Text>
      {description ? (
        <Text style={styles.RbuttonDesciption}>{description}</Text>
      ) : null}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  Rbutton: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#1e90ff",
    color: "#f8f8ff",
    width: "100%",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
    minHeight: 70,
  },
  RbuttonText: {
    color: "#f8f8ff",
    fontSize: 20,
  },
  RbuttonDesciption: {
    color: "#DCDCDC",
    fontSize: 15,
    fontStyle: "italic",
  },
  RbuttonIcon: {},
});
