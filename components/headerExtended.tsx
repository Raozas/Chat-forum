import { View, Text, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";

type ButtonType = "menu" | "back" | "function";

interface HeaderProps {
  type?: ButtonType;
  title?: string;
  onPress?: () => void;
}

const Button = ({
  type,
  onPress,
}: {
  type: ButtonType;
  onPress: () => void;
}) => {
  switch (type) {
    case "menu":
      return (
        <Pressable onPress={onPress}>
          <Feather name="menu" size={24} color="#3461FD" />
        </Pressable>
      );
    case "back":
      return (
        <Pressable onPress={onPress}>
          <Feather name="arrow-left" size={24} color="#3461FD" />
        </Pressable>
      );
    case "function":
      return (
        <Pressable onPress={onPress}>
          <Feather name="more-vertical" size={24} color="#3461FD" />
        </Pressable>
      );
    default:
      return null;
  }
};

export default function HeaderExtended({
  type,
  title,
  onPress,
}: HeaderProps) {
  return (
    <View style={styles.container}>
      {type && onPress ? <Button type={type} onPress={onPress} /> : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    backgroundColor: "#f5f5f5",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    height: 100,
    paddingTop: 60,
  },
  title: {
    fontSize: 20,
    fontFamily: "Poppins-Bold",
    color: "#3461FD",
  },
});