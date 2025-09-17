import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import ReanimatedDrawerLayout, {
  DrawerLayoutMethods,
  DrawerPosition,
  DrawerType,
} from "react-native-gesture-handler/ReanimatedDrawerLayout";

import Drawer from "@/app/components/drawer";
import HeaderExtended from "@/app/components/headerExtended";
import { useDashboardViewModel } from "./dashboardViewModel";

export default function Dashboard() {
  const drawerRef = useRef<DrawerLayoutMethods>(null);
  const router = useRouter();
  const { chats, theme, options, toggleTheme } = useDashboardViewModel();


  return (
    <ReanimatedDrawerLayout
      ref={drawerRef}
      renderNavigationView={() => (
        <Drawer theme={theme} options={options} toggleTheme={toggleTheme} />
      )}
      drawerPosition={DrawerPosition.LEFT}
      drawerType={DrawerType.SLIDE}
      drawerWidth={300}
    >

      <View>
        <HeaderExtended
          type="menu"
          title="Dashboard"
          onPressMenu={() => drawerRef.current?.openDrawer()}
        />

        {chats.map((chat) => (
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
                pathname: "/screens/chatGroup/chatGroupView",
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
                {chat.lastMessageShort}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ReanimatedDrawerLayout>
  );
}
