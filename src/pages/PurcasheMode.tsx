import React from "react";
import { StyleSheet, SafeAreaView, View, ScrollView } from "react-native";
import { theme } from "../styles/colors";

//conponents
import { H1, Text } from "../components/Typografy/Index";
import { ProductItemList } from "../components/ItemProduct/Index";
import { LabelButton } from "../components/Button/Index";

//hook
import { useProduct } from "../contexts/ProductContext";

//interface
import { ProductItemProps } from "../components/ItemProduct/Add/Index";

export const PurcasheMode = () => {
  const { productList } = useProduct();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ width: "100%", paddingBottom: 40 }}
      >
        <View style={styles.titleView}>
          <H1>Modo Compra</H1>
          <Text.Subtitle>
            Dê um check nos produtos que está levando.
          </Text.Subtitle>
        </View>

        <View style={styles.productList}>
          {productList.length != 0 &&
            productList.map((product: ProductItemProps, index: number) => (
              <ProductItemList
                key={index}
                id={product.id}
                title={product.title}
                productImage={product.productImage}
                variant="default"
                quantity={product.quantity}
                isCertified={product.isCertified}
                certifications={product.certifications}
              />
            ))}
        </View>

        <LabelButton
          label="Finalizar"
          onPress={() => {}}
          size="large"
          style={{ marginTop: 35, width: 300 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 30,
  },
  titleView: {
    marginTop: 35,
    marginBottom: 10,
  },
  productList: {
    marginTop: 10,
  },
});
