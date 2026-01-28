import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";

const LandingPage = () => {
  return (
    <LinearGradient
      colors={["#fdf497", "#fd5949", "#d6249f", "#285AEB"]}
      style={styles.container}
    >
      <Text></Text>
    </LinearGradient>
  );
};

export default LandingPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
    width: "100%",
  },
});
