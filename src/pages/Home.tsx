import React, { useEffect } from "react";
import { StyleSheet, View, ScrollView, TouchableHighlight } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";

//theme, fonts and icons
import { theme } from "../styles/colors";
import { fonts } from "../styles/fonts";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//components
import { Header } from "../components/Header/Index";
import { Card } from "../components/Card/Index";
import { H1, H2, Text } from "../components/Typografy/Index";
import { OutlineInput } from "../components/Input/Index";
import { ProductItemList } from "../components/ItemProduct/Index";

//hook
import { useProduct } from "../contexts/ProductContext";

//interface
import { ProductItemProps } from "../components/ItemProduct/Add/Index";

export const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const { firstProductWasAdded, productList } = useProduct();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.srollview}
        showsVerticalScrollIndicator={false}
        style={{ flex: 1 }}
      >
        <Header />

        {firstProductWasAdded && (
          <View style={{ marginBottom: 30 }}>
            <OutlineInput
              hasIcon
              placeholder="Pesquise por alimentos.."
              onChange={() => {}}
              onEndEditing={() =>
                navigate("Main", {
                  screen: "Adicionar",
                })
              }
            />
          </View>
        )}

        <View style={styles.content}>
          <View>
            <H1>Minha Lista</H1>
            <Text.Subtitle>
              {firstProductWasAdded
                ? "Aqui está, essa é a sua lista de produtos do momento. "
                : "Você ainda não tem nenhuma lista com produtos."}
            </Text.Subtitle>
          </View>

          {!firstProductWasAdded ? (
            <Card
              style={{ marginTop: 40 }}
              message="Que tal começar a adicionar produtos para compra?"
            />
          ) : (
            <View>
              <View style={styles.novidades}>
                <H2 style={{ fontFamily: fonts.complement }}>Novidades</H2>

                <TouchableHighlight
                  onPress={() => {
                    navigate("SelectMarket");
                  }}
                  activeOpacity={1}
                  underlayColor={"#AAA"}
                  style={styles.novidadesContent}
                >
                  <>
                    <View style={styles.novidadesTitleView}>
                      <MaterialCommunityIcons
                        name="shopping"
                        size={28}
                        color="white"
                        style={{
                          marginRight: 10,
                        }}
                      />
                      <H2
                        style={{ color: "white", fontFamily: fonts.complement }}
                      >
                        Vamos as Compras?
                      </H2>
                    </View>

                    <Text.Subtitle style={{ color: "white", fontSize: 17 }}>
                      Ative essa funcionalidade ao ir ao mercado!
                    </Text.Subtitle>
                  </>
                </TouchableHighlight>
              </View>

              <View style={styles.produtos}>
                <H2 style={{ fontFamily: fonts.complement }}>Seus Produtos</H2>

                <View style={styles.controleCompra}>
                  <MaterialIcons
                    name="info"
                    size={28}
                    color="white"
                    style={{
                      marginRight: 10,
                    }}
                  />
                  <View>
                    <Text.Subtitle
                      style={{
                        color: "white",
                        fontFamily: fonts.complement,
                        fontSize: 16,
                      }}
                    >
                      Controle sua compra
                    </Text.Subtitle>

                    <Text.Subtitle style={{ color: "white", fontSize: 14 }}>
                      {productList.length == 0
                        ? "Você ainda não adicionou nenhum produto a lista."
                        : productList.length == 1
                        ? "Você tem 1 item."
                        : `Você tem ${productList.length} itens.`}
                    </Text.Subtitle>
                  </View>
                </View>

                <View style={styles.productList}>
                  {productList.length != 0 &&
                    productList.map(
                      (product: ProductItemProps, index: number) => (
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
                      )
                    )}
                </View>
              </View>
            </View>
          )}
        </View>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  srollview: {
    paddingHorizontal: 30,
    paddingBottom: 130,
    // alignItems: "center",
    flexGrow: 1,
  },
  content: {
    // height: 210,
    justifyContent: "space-between",
  },
  novidades: {
    marginTop: 20,
  },
  novidadesContent: {
    backgroundColor: theme.colors.cards.tertiary,
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  novidadesTitleView: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  produtos: {
    marginTop: 20,
  },
  controleCompra: {
    backgroundColor: theme.colors.cards.primary,
    borderRadius: 10,
    padding: 15,
    paddingHorizontal: 20,
    marginTop: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  productList: {
    marginTop: 10,
  },
});
