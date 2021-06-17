import React from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../styles/colors";
import { OutlineInput } from "../components/Input/Index";
import { H2, Text } from "../components/Typografy/Index";

export const SearchProduct = () => {
  return (
    <SafeAreaView style={styles.container}>
      <OutlineInput
        hasIcon
        placeholder="Pesquise por alimentos.."
        onChange={() => {}}
      />

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.emptyList}>
          <Ionicons name="search-outline" size={90} color="#3a4940" />

          <View>
            <H2 style={styles.textCentered}>Pesquise o que precisa</H2>
            <Text.Medium style={styles.textCentered}>
              Pesquise por todos os tipos de produtos, alimentos, bebidas, para
              casa, para higiene pessoal e muito mais.
            </Text.Medium>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingHorizontal: 20,
  },
  textCentered: {
    textAlign: "center",
  },
  emptyList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  scrollView: {
    flex: 1,
    display: "flex",
    height: '100%',
    
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 120
  }
});
