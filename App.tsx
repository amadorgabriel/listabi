import React from "react";
import { StyleSheet, Text, View } from "react-native";

import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

import { useFonts, Lato_400Regular } from "@expo-google-fonts/lato";

export default function App() {
  const [fontsLoaded] = useFonts({
    Lato_400Regular,
  });

  if (!fontsLoaded) {
    <AppLoading />;
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
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
