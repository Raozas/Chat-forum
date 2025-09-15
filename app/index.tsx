import HeaderWI from "@/components/headerWI";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <HeaderWI
        iconType="wave"
        title="Sign Up"
        subtitle="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum."
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button title="Open Home Page" onPress={() => router.push("/dashboard")} />
    </View>
  );
}
