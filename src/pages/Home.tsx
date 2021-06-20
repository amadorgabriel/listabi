import React from "react";
import { StyleSheet, View, ScrollView, Pressable } from "react-native";
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
import { H1, H2, H3, Text } from "../components/Typografy/Index";
import { OutlineInput, CounterInput } from "../components/Input/Index";

//hook
import { useProduct } from "../contexts/ProductContext";

//server
import db from "../../server.json";

export const Home: React.FC = () => {
  const { navigate } = useNavigation();

  const { firstProductWasAdded } = useProduct();

  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={styles.srollview}
        showsVerticalScrollIndicator={false}
      >
        <Pressable>
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
                Você ainda não tem nenhuma lista com produtos.
              </Text.Subtitle>
            </View>

            {!firstProductWasAdded ? (
              <Card message="Que tal começar a adicionar produtos para compra?" />
            ) : (
              <View>
                <View style={styles.novidades}>
                  <H2 style={{ fontFamily: fonts.complement }}>Novidades</H2>

                  <View style={styles.novidadesContent}>
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
                  </View>
                </View>

                <View style={styles.produtos}>
                  <H2 style={{ fontFamily: fonts.complement }}>
                    Seus Produtos
                  </H2>

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
                        XX itens e XX produtos
                      </Text.Subtitle>
                    </View>
                  </View>

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
                        XX itens e XX produtos
                      </Text.Subtitle>
                    </View>
                  </View>

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
                        XX itens e XX produtos
                      </Text.Subtitle>
                    </View>
                  </View>

                  <View style={styles.productList}></View>
                </View>
              </View>
            )}
          </View>
        </Pressable>
      </ScrollView>

      <StatusBar style="auto" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    flex: 1,
  },
  srollview: {
    width: "100%",
    height: "100%",
    paddingHorizontal: 30,
    alignItems: "center",
  },
  content: {
    height: 210,
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
  productList: {},
});
