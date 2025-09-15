import HeaderWI from "@/components/headerWI";
import { useRouter } from "expo-router";
import { Text, View } from "react-native";
import Button from "../components/button";

export default function Index() {
  const router = useRouter();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        gap: 50,
      }}
    >
      <HeaderWI
        iconType="wave"
        title="Sign Up"
        subtitle="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum."
      />
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Button text="Open Home Page" onPress={() => router.push("/dashboard")} />
    </View>
  );
}
