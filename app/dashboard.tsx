import HeaderExtended from "@/components/headerExtended";
import React, { useRef } from "react";
import { Image, Text, View } from "react-native";
import bearAva from "../assets/images/bearAva.jpg";
import { Feather } from "@expo/vector-icons";

import ReanimatedDrawerLayout, {
  DrawerLayoutMethods,
  DrawerPosition,
  DrawerType,
} from "react-native-gesture-handler/ReanimatedDrawerLayout";

const Ava = () => {
  return <Image source={bearAva} style={{ width: 50, height: 50, borderRadius: 25 }} />;
};

const DrawerPage = () => {
  return (
    <View
      style={{ flex: 1, justifyContent: "flex-start", alignItems: "center" }}
    >
      <View
        style={{
          height: 180,
          borderColor: "gray",
          width: "100%",
          justifyContent: "flex-end",
          alignItems: "flex-start",
          padding: 15,
          gap: 10,
          backgroundColor: "#F5F9FE",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <Ava />
          <Feather name="moon" size={24} color="#3461FD" />
        </View>
        
        <Text style={{ fontSize: 18, fontFamily: "Poppins-Bold", color: "#61677D" }}>
          User Name
        </Text>
      </View>
    </View>
  );
};

export default function Home() {
  const drawerRef = useRef<DrawerLayoutMethods>(null);
  return (
    <ReanimatedDrawerLayout
      ref={drawerRef}
      renderNavigationView={() => <DrawerPage />}
      drawerPosition={DrawerPosition.LEFT}
      drawerType={DrawerType.SLIDE}
      drawerWidth={300}
    >
      <View>
        <HeaderExtended
          type="menu"
          title="Dashboard"
          onPressMenu={() => {
            drawerRef.current?.openDrawer();
          }}
        />
      </View>
    </ReanimatedDrawerLayout>
  );
}
