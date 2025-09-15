import React from "react";
import Button from "@/components/button";
import HeaderWI from "@/components/headerWI";
import { useRouter } from "expo-router";
import { View, TextInput, Pressable, Text, Image } from "react-native";
import { useState } from "react";
import Input from "@/components/input";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingTop: 30,
        gap: 16,
      }}
    >
      <HeaderWI
        iconType="wave"
        title="Sign Up"
        subtitle="It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum."
      />
      <View style={{ flexDirection: "row", gap: 16 }}>
        <Pressable
          style={{
            flexDirection: "row",
            width: 160,
            height: 56,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            borderRadius: 14,
            backgroundColor: "#F5F9FE",
          }}
        >
          <Image source={require("../../assets/images/_Facebook.png")} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              marginTop: 4,
              color: "#61677D",
            }}
          >
            Facebook
          </Text>
        </Pressable>
        <Pressable
          style={{
            flexDirection: "row",
            width: 160,
            height: 56,
            justifyContent: "center",
            alignItems: "center",
            gap: 8,
            borderRadius: 14,
            backgroundColor: "#F5F9FE",
          }}
        >
          <Image source={require("../../assets/images/Group.png")} />
          <Text
            style={{
              fontSize: 16,
              fontFamily: "Poppins-Bold",
              marginTop: 4,
              color: "#61677D",
            }}
          >
            Google
          </Text>
        </Pressable>
      </View>
      <View style={{ flexDirection: "row", alignItems: "center", justifyContent:"space-between" }}>
        <View
          style={{ height: 1, backgroundColor: "lightgray", width: 153 }}
        />
        <Text style={{ fontFamily: "Poppins-Regular" }}>  Or  </Text>
        <View
          style={{ height: 1, backgroundColor: "lightgray", width: 153}}
        />
      </View>
      <Input placeholder="Name" value={name} onChangeText={setName} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} />
      <Input
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />

      <Button
        text="Sign Up"
        type="default"
        onPress={() => router.push("/dashboard")}
      />
    </View>
  );
}
