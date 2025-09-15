// this is header with icon , title and text component

import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type IconType = "clap" | "wave" | undefined;

interface HeaderWIProps {
  iconType: IconType; // source for the icon image
  title: string; // title text
  subtitle: string; // subtitle text
  iconStyle?: object; // optional style for the icon
}

const HeaderWI: React.FC<HeaderWIProps> = ({
  iconType,
  title,
  subtitle,
  iconStyle,
}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          alignItems: "center",
          width: 90,
          height: 90,
          justifyContent: "center",
          borderRadius: 25,
          backgroundColor: "#D6DFFF",
        }}
      >
        {iconType && (
          <Image
            source={
              iconType === "clap"
                ? require("../assets/images/Claps.png")
                : iconType === "wave"
                ? require("../assets/images/Wave.png")
                : undefined
            }
            style={[styles.icon, iconStyle]}
          />
        )}
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 10,
    justifyContent: "center",
    gap: 10,
    margin: 0,
  },
  icon: {
    width: 70,
    height: 70,
  },
  textContainer: {
    alignItems: "center",
    width: 345,
  },
  title: {
    fontWeight: "bold",
    color: "#2A4ECA",
    fontSize: 32,
  },
  subtitle: {
    color: "gray",
    fontSize: 14,
    textAlign: "center",
  },
});

export default HeaderWI;

// Usage example:
/*
<HeaderWI
    iconType="clap"
    title="Welcome to the App"
    subtitle="We're glad you're here!"
    iconStyle={{ tintColor: 'blue' }}
/>
*/
