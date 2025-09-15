import React from "react";
import Button from "@/components/button";
import HeaderWI from "@/components/headerWI";
import { useRouter } from "expo-router";
import { View, TextInput } from "react-native";
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
      <Input
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
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
