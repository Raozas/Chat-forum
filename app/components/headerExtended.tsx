import { Feather } from "@expo/vector-icons";
import { Pressable, StyleSheet, Text, View } from "react-native";

type ButtonType = "menu" | "back" | "function";

interface ButtonProps {
  type: ButtonType;
  onPress: () => void;
}

const iconMap = {
  menu: "menu",
  back: "arrow-left",
  function: "more-vertical",
} as const;

interface HeaderProps {
  type?: ButtonType;
  title?: string;
  onPressMenu?: () => void;
  onPressBack?: () => void;
  onPressFunction?: () => void;
  type2?: ButtonType;
  onPress2?: () => void;
}

const Button = ({
  type,
  onPress,}: ButtonProps) =>  (
  <Pressable onPress={onPress}>
    <Feather name={iconMap[type]} size={24} color="#3461FD" />
  </Pressable>
);

export default function HeaderExtended({
  type,
  title,
  onPressMenu,
  onPressBack,
  onPressFunction,
  type2,
  onPress2,
}: HeaderProps) {
  let onPress;
  if (type === "menu") onPress = onPressMenu;
  else if (type === "back") onPress = onPressBack;
  else if (type === "function") onPress = onPressFunction;

  return (
    <View style={styles.container  }>
      {type && onPress ? <Button type={type} onPress={onPress} /> : null}
      <Text style={styles.title}>{title}</Text>
      {type2 && onPress2 ? <Button type={type2} onPress={onPress2} /> : null}
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

// Usage Example
// <HeaderExtended
//   type="menu"
//   title="Home"
//   onPressMenu={() => console.log("Menu pressed")}
//   onPressBack={() => console.log("Back pressed")}
//   onPressFunction={() => console.log("Function pressed")}
// />