import React from "react";
import { useColorScheme } from "@/hooks/use-color-scheme.web";
import { Tabs } from "expo-router";
import { HapticTab } from "@/components/haptic-tab";
import { IconSymbol } from "@/components/ui/icon-symbol";
import { Colors } from "@/constants/theme";
import "react-native-reanimated";



export default function AuthLayout() {
  const colorScheme = useColorScheme();
  return (
     <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="signin"
        options={{
          title: 'Auth',
          tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
        }}
      />

    </Tabs>
  );
}
