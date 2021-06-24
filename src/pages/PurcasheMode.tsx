import React from "react";
import { StyleSheet, SafeAreaView, View } from "react-native";
import { H1, Text } from "../components/Typografy/Index";
import { theme } from "../styles/colors";
import { MaterialIcons } from "@expo/vector-icons";

export const PurcasheMode = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.emptyList}>
        <MaterialIcons name="info-outline" size={90} color="#30837F" />

        <View>
          <H1 style={styles.textCentered}>Modo de Compras</H1>
          <Text.Subtitle style={styles.textCentered}>
            Aguarde, estamos trabalhando nesta página e logo mais estará
            completa!
          </Text.Subtitle>
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
    paddingHorizontal: 5,
  },
  textCentered: {
    textAlign: "center",
    marginTop: 10,
    color: theme.colors.typografy.title.primary,
  },
  emptyList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 40,
  },
});
