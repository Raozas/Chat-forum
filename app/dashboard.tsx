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
import Button from "@/components/button";
import { useRouter } from "expo-router";

const Ava = () => {
  return (
    <Image
      source={bearAva}
      style={{ width: 50, height: 50, borderRadius: 25 }}
    />
  );
};

const DrawerPage = () => {
  const featherIcons = ["user", "settings", "help-circle"] as const;
  type FeatherIconName = (typeof featherIcons)[number];

  const Options: { name: string; icon: FeatherIconName }[] = [
    { name: "Profile", icon: "user" },
    { name: "Settings", icon: "settings" },
    { name: "Help", icon: "help-circle" },
  ];

   const router = useRouter();

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
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Ava />
          <Feather name="moon" size={24} color="#3461FD" />
        </View>

        <Text
          style={{ fontSize: 18, fontFamily: "Poppins-Bold", color: "#61677D" }}
        >
          User Name
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: 20,
        }}
      >
        {Options.map((o, index) => (
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
            <Feather name={o.icon} size={24} color="#3461FD" />
            <Text
              style={{
                fontSize: 16,
                fontFamily: "Poppins-Regular",
                color: "#61677D",
              }}
            >
              {o.name}
            </Text>
          </View>
        ))}
      </View>
      <Button text="Logout" onPress={() => router.push("/(auth)/signIn")} width={280} type="refuse" style={{ bottom: 50, position: "absolute" }} />
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
