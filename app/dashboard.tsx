import Button from "@/components/button";
import HeaderExtended from "@/components/headerExtended";
import { Feather } from "@expo/vector-icons";
import { router, useRouter } from "expo-router";
import React, { useRef } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import ReanimatedDrawerLayout, {
  DrawerLayoutMethods,
  DrawerPosition,
  DrawerType,
} from "react-native-gesture-handler/ReanimatedDrawerLayout";
import bearAva from "../assets/images/bearAva.jpg";
import messages from "./(tabs)/(chat)/messages.json";

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
  const [isDark, setIsDark] = React.useState(false);

  // Theme colors
  const theme = isDark
    ? {
        background: "#23272F",
        text: "#F5F9FE",
        accent: "#FFD700",
        icon: "#FFD700",
      }
    : {
        background: "#F5F9FE",
        text: "#61677D",
        accent: "#3461FD",
        icon: "#3461FD",
      };

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
            onPress={() => setIsDark((prev) => !prev)}
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
        onPress={() => router.push("/(auth)/signIn")}
        width={280}
        type="refuse"
        style={{ bottom: 50, position: "absolute" }}
      />
    </View>
  );
};

export default function Home() {
  const drawerRef = useRef<DrawerLayoutMethods>(null);
  const chats = [
    { id: 1, title: "JDU", groupId: "000001" },
    { id: 2, title: "WSLU", groupId: "000002" },
    {
      id: 3,
      title: "UWED",
      groupId: "000003",
    },
  ];
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
        {chats.map((chat) => {
          // Find last message for this chat's groupId
          const groupMessages = messages.filter((m) => m.groupId === chat.groupId);
          const lastMessage = groupMessages.length > 0 ? groupMessages[groupMessages.length - 1].text : "";
          return (
            <TouchableOpacity
              key={chat.id}
              style={{
                flexDirection: "row",
                alignItems: "center",
                padding: 15,
                gap: 20,
                borderBottomWidth: 1,
                borderBottomColor: "#eee",
              }}
              onPress={() =>
                router.push({
                  pathname: "/(tabs)/(chat)/[id]",
                  params: { ...chat, title: chat.title },
                })
              }
            >
              <View
                style={{
                  width: 50,
                  height: 50,
                  borderRadius: 25,
                  backgroundColor: "#E2E5EF",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 6,
                }}
              >
                <Text
                  style={{
                    fontSize: 25,
                    fontFamily: "Poppins-Bold",
                    color: "#61677D",
                  }}
                >
                  {chat.title.charAt(0)}
                </Text>
              </View>
              <View>
                <Text
                  style={{
                    fontSize: 16,
                    fontFamily: "Poppins-Bold",
                    color: "#61677D",
                  }}
                >
                  {chat.title}
                </Text>
                <Text
                  style={{
                    fontSize: 14,
                    fontFamily: "Poppins-Regular",
                    color: "#A0A3B1",
                  }}
                >
                  {lastMessage.length > 30
                    ? lastMessage.slice(0, 30) + "..."
                    : lastMessage}
                </Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </ReanimatedDrawerLayout>
  );
}
