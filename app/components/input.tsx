import { TextInput } from "react-native";
import { StyleSheet } from "react-native";

interface InputProps {
  placeholder?: string;
  required?: boolean;
  value?: string;
  onChangeText?: (text: string) => void;
  type?: "default" | "password";
  secureTextEntry?: boolean;
}

export default function Input({
  placeholder,
  required,
  value,
  onChangeText,
  secureTextEntry,
}: InputProps) {
  return (
    <TextInput
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={secureTextEntry}
      style={styles.input}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F5F9FE",
    borderRadius: 14,
    width: 340,
    height: 60,
    paddingHorizontal: 24,
    paddingVertical: 18,
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
});
