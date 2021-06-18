import React, { useState } from "react";
import { StyleSheet, ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../styles/colors";

import { ProductItem, ProductItemProps } from "../components/ItemProduct/Index";
import { OutlineInput } from "../components/Input/Index";
import { H2, Text } from "../components/Typografy/Index";

// Interface
type CertificationName = "Empresa B" | "Cruelty Free" | "Orgânico Brasil";

interface ShippingList {
  product: ProductItemProps;
}



interface CertificationProduct {
  name: CertificationName;
  certificationImage: string;
}

export const SearchProduct: React.FC = () => {
  const [productList, setProductList] = useState({});

  return (
    <SafeAreaView style={styles.container}>
      <OutlineInput
        hasIcon
        placeholder="Pesquise por alimentos.."
        onChange={() => {}}
      />

      <View style={styles.inner}>
        {Object.entries(productList).length === 9 ? (
          <View style={styles.emptyList}>
            <Ionicons name="search-outline" size={90} color="#262927" />

            <View>
              <H2 style={styles.textCentered}>Pesquise o que precisa</H2>
              <Text.Medium style={styles.textCentered}>
                Pesquise por todos os tipos de produtos, alimentos, bebidas,
                para casa, para higiene pessoal e muito mais.
              </Text.Medium>
            </View>
          </View>
        ) : (
          <ScrollView
            contentContainerStyle={{ width: "100%", paddingBottom: 40 }}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.title}>
              <H2>Principais resultados </H2>
              <Text.Subtitle>
                Selecione o produto que deseja comprar!
              </Text.Subtitle>
            </View>

            <View style={styles.contentList}>
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
              <ProductItem style={styles.product} />
            </View>
          </ScrollView>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 25,
    backgroundColor: theme.colors.background,
    alignItems: "center",
    paddingHorizontal: 20,
    flex: 1,
  },
  inner: {
    flex: 1,
    width: "100%",
  },
  textCentered: {
    textAlign: "center",
  },
  emptyList: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  contentList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: 315,
    alignItems: "center",
  },
  product: {
    marginTop: 15,
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
  },
});
