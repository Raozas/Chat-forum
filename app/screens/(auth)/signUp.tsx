import Button from "@/app/components/button";
import HeaderWI from "@/app/components/headerWI";
import Input from "@/app/components/input";
import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { Image, Pressable, Text, TouchableOpacity, View } from "react-native";
import Animated, { FadeIn, FadeOut } from "react-native-reanimated";

export default function SignUp() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checked, setChecked] = useState(false);
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
        iconType="clap"
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
      <Input placeholder="Name" value={name} onChangeText={setName} required={true} />
      <Input placeholder="Email" value={email} onChangeText={setEmail} required={true} />
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
      <View
        style={{
          flexDirection: "row",
          width: 340,
          justifyContent: "flex-start",
          alignItems: "center",
        }}
      >
        <TouchableOpacity
          onPress={() => setChecked(!checked)}
          style={{
            width: 20,
            height: 20,
            marginRight: 8,
            borderRadius: 4,
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: checked ? "#3461FD" : "#F5F9FE",
          }}
        >
          {checked && (
            <Animated.View entering={FadeIn} exiting={FadeOut}>
              <Feather name="check" size={16} color="#fff" />
            </Animated.View>
          )}
        </TouchableOpacity>
        <Text
          style={{
            fontFamily: "Poppins-Regular",
            color: "#61677D",
            marginTop: 2,
          }}
        >
          I agree to the Terms of Service and Privacy Policy
        </Text>
      </View>

      <Button
        text="Sign Up"
        type="default"
        onPress={() => router.push("../dashboard/dashboard")}
      />
      <View style={{ flexDirection: "row", gap: 8 }}>
        <Text style={{ fontFamily: "Poppins-Regular", color: "#61677D" }}>
          Already have an account?
        </Text>
        <TouchableOpacity onPress={() => router.push("/screens/(auth)/signIn")}>
          <Text style={{ fontFamily: "Poppins-Bold", color: "#3461FD" }}>
            Log In
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
