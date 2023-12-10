import React from "react";
import { TouchableOpacity, StyleSheet, Text, View } from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";

type TProps = {
  text?: string;
  textColor?: string;
  description?: string;
  action?: () => any | void;
  bstyles?: StyleSheet | any;
  icon?: any;
  color?: string;
  size?: number;
};

export const HeaderMenuItem = ({
  text,
  action,
  icon,
  color,
  size = 16,
}: TProps) => {
  const styles = StyleSheet.create({
    Hbutton: {
      display: "flex",
      flexDirection: "column",
      color: color ? color : "#f8f8ff",
      borderRadius: 5,
      justifyContent: "center",
      alignItems: "center",
      marginVertical: 10,
      minHeight: 70,
    },
    RbuttonText: {
      color: color ? color : "#f8f8ff",
      fontSize: size ? size : 20,
    },
  });

  return (
    <TouchableOpacity onPress={action} style={styles.Hbutton}>
      <Text style={styles.RbuttonText}>
        {icon ? (
          <>
            <Ionicons name={icon} color={color} size={size} />
            <Text> </Text>
          </>
        ) : null}
        {text}
      </Text>
    </TouchableOpacity>
  );
};
