import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { H2, Text } from "../components/Typografy/Index";

import { theme } from "../styles/colors";

import { MaterialIcons } from "@expo/vector-icons";

export const Extract = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emptyList}>
        <MaterialIcons name="info-outline" size={90} color="#30837F" />

        <View>
          <H2 style={styles.textCentered}>Histórico de </H2>
          <Text.Medium style={styles.textCentered}>
            Infelizmente sua lista está vazia. Aqui você acessa todos os seus
            últimos produtos comprados, então adicione novidades a sua lista!.
          </Text.Medium>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  inner: {
    flex: 1,
    width: "100%",
  },
  textCentered: {
    textAlign: "center",
    color: theme.colors.typografy.title.primary,
  },
  emptyList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },
});
