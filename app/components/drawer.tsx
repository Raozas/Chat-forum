import bearAva from "@/assets/images/bearAva.jpg";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, Text, View } from "react-native";
import Button from "./button";

type DrawerProps = {
  theme: {
    background: string;
    text: string;
    accent: string;
    icon: string;
  };
  options: { name: string; icon: "user" | "settings" | "help-circle" }[];
  toggleTheme: () => void;
};

const Ava = () => (
  <Image source={bearAva} style={{ width: 50, height: 50, borderRadius: 25 }} />
);

export default function Drawer({ theme, options, toggleTheme }: DrawerProps) {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}>
      <View
        style={{
          height: 180,
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: 15,
          gap: 10,
          backgroundColor: theme.background,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Ava />
          <Feather
            name="moon"
            size={24}
            color={theme.icon}
            onPress={toggleTheme}
            style={{ padding: 8 }}
          />
        </View>

        <Text
          style={{
            fontSize: 18,
            fontFamily: "Poppins-Bold",
            color: theme.text,
          }}
        >
          User Name
        </Text>
      </View>

      <View style={{ marginTop: 20, width: "100%" }}>
        {options.map((o, index) => (
          <View
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              padding: 15,
              gap: 20,
              width: "100%",
            }}
          >
            <Feather name={o.icon} size={24} color={theme.icon} />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: theme.text,
              }}
            >
              {o.name}
            </Text>
          </View>
        ))}
      </View>

      <Button
        text="Logout"
        onPress={() => router.push("/screens/(auth)/signIn")}
        width={280}
        type="refuse"
        style={{ bottom: 50, position: "absolute" }}
      />
    </View>
  );
}
