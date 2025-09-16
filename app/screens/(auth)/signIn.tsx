import Button from "@/app/components/button";
import HeaderWI from "@/app/components/headerWI";
import Input from "@/app/components/input";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";

export default function SignIn() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
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
        title="Sign In"
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
          <Image source={require("../../../assets/images/_Facebook.png")} />
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
          <Image source={require("../../../assets/images/Group.png")} />
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
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <View style={{ height: 1, backgroundColor: "lightgray", width: 153 }} />
        <Text style={{ fontFamily: "Poppins-Regular" }}> Or </Text>
        <View style={{ height: 1, backgroundColor: "lightgray", width: 153 }} />
      </View>
      <Input
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        required={true}
      />
      <View style={{ width: 340, position: "relative", marginBottom: 8 }}>
        <Input
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          required={true}
        />
        <Pressable
          onPress={() => setShowPassword((prev) => !prev)}
          style={{ position: "absolute", right: 16, top: 18 }}
        >
          <Feather
            name={showPassword ? "eye-off" : "eye"}
            size={22}
            color="#61677D"
          />
        </Pressable>
      </View>
      <View style={{ width: 340, alignItems: "flex-end", marginBottom: 24 }}>
        <Text style={{ fontFamily: "Poppins-Regular", color: "#61677D" }}>
          Forgot Password?
        </Text>
      </View>
      <Button
        text="Sign In"
        type="default"
        onPress={() => router.push("../dashboard/dashboard")}
      />
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Text style={{ fontFamily: "Poppins-Regular", color: "#61677D" }}>
          Don't have an account?
        </Text>
        <Pressable onPress={() => router.push("/screens/(auth)/signUp")}>
          <Text style={{ fontFamily: "Poppins-Bold", color: "#3461FD" }}>
            Sign Up
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
