import { Text, View } from "react-native";
import HeaderExtended from "@/components/headerExtended";

export default function Home() {
  return (
    <View>
      <HeaderExtended type="menu" title="Dashboard" onPress={() => {console.log("Menu pressed");}} />
    </View>
  );
}
