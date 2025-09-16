import React from "react";
import { View, Pressable, Text } from "react-native";
import { StyleSheet } from "react-native";

interface ButtonProps {
  onPress?: () => void;
  text: string;
  type?: "default" | "refuse";
  width?: number;
  style?: object;
}

export default function Button({
  onPress,
  text,
  type = "default",
  width,
  style,
}: ButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.button,
        { backgroundColor: type === "refuse" ? "#ef233c" : "#3461FD" },
        width ? { width: width } : {},
        style,
      ]}
    >
      <Text style={{ color: "white", fontSize: 16, fontFamily: "Poppins-Regular" }}>
        {text}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 340,
    height: 60,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },
});
