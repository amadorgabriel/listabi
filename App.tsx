import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

import Routes from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <Routes />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
