import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  ScrollView,
  View,
  Pressable,
  Image,
  ToastAndroid,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import { Modalize } from "react-native-modalize";

import db from "../../server.json";
import { theme } from "../styles/colors";

//components
import { AddableProduct } from "../components/ItemProduct/Index";
import { OutlineInput, CounterInput } from "../components/Input/Index";
import { H2, H3, Text } from "../components/Typografy/Index";
import { LabelButton } from "../components/Button/Index";
import { Card } from "../components/Card/Index";

//hook
import { useProduct } from "../contexts/ProductContext";

export const SearchProduct: React.FC = () => {
  const [productList, setProductList] = useState([{}]);
  const { modalIsActive, handleModal, currentProduct, addProductToStorage } = useProduct();
  const modalizeRef = useRef<Modalize>(null);

  function handleSearchProduct() {
    setProductList(db.products);
  }

  function showToast() {
    ToastAndroid.show('Adicionado!', ToastAndroid.SHORT);
  }

  function handleOpenRefModal() {
    modalizeRef.current?.open();
  }

  function handleCloseRefModal() {
    modalizeRef.current?.close();
  }

  useEffect(() => {
    if (modalIsActive === true) {
      handleOpenRefModal();
    } else {
      handleCloseRefModal();
    }
  }, [modalIsActive]);

  return (
    <>
      <SafeAreaView style={styles.container}>
        <OutlineInput
          hasIcon
          placeholder="Pesquise por alimentos.."
          onChange={() => {}}
          onEndEditing={handleSearchProduct}
        />

        <View style={styles.inner}>
          {productList.length <= 1 ? (
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
                {productList.map((element: any, index) => {
                  return (
                    <Pressable key={index}>
                      <AddableProduct
                        id={index + 1}
                        style={styles.product}
                        title={element.title}
                        productImage={element.productImage}
                        isCertified={element.isCertified}
                        certifications={element.certifications}
                        quantity={0}
                      />
                    </Pressable>
                  );
                })}
              </View>
            </ScrollView>
          )}
        </View>
      </SafeAreaView>

      <Modalize
        // modalHeight={380}
        adjustToContentHeight
        ref={modalizeRef}
        onClose={() => handleModal(true)}
      >
        <View style={modalStyles.container}>
          <View style={modalStyles.center}>
            <View style={modalStyles.flexRow}>
              <Image
                style={modalStyles.productImage}
                source={{
                  uri: currentProduct.productImage,
                }}
              />

              <View>
                <H2 style={modalStyles.productTitle}>{currentProduct.title}</H2>
                <CounterInput />
              </View>
            </View>

            <View style={modalStyles.actionButton}>
              <LabelButton
                size="medium"
                label="Esquecer"
                style={{ width: "48%", marginRight: 10 }}
                color="secondary"
                onPress={() => {
                  handleModal();
                }}
              />
              <LabelButton
                size="medium"
                label="Adicionar"
                style={{ width: "48%" }}
                onPress={() => {
                  addProductToStorage();
                  handleModal();
                  showToast();
                }}
              />
            </View>
          </View>

          <View style={{ marginTop: 25 }}>
            <H3>Saiba Mais</H3>

            <View style={modalStyles.modalContent}>
              {currentProduct.certifications?.length == 0 ? (
                <Card
                  variant="outlined"
                  align="left"
                  message="É uma pena.. Infelizmente esse produto não possui certificações sustentáveis"
                />
              ) : (
                currentProduct.certifications?.map(
                  (element: any, index: number) => (
                    <Image
                      key={index}
                      style={modalStyles.certificationImage}
                      source={{
                        uri: element.certificateImage,
                      }}
                    />
                  )
                )
              )}
            </View>
          </View>
        </View>
      </Modalize>
    </>
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
    marginTop: 125,
  },
  contentList: {
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    maxWidth: 315,
    alignItems: "center",
  },
  product: {
    marginTop: 15,
    justifyContent: "space-between",
  },
  title: {
    marginTop: 25,
    marginBottom: 20,
  },
});

const modalStyles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    marginTop: 15,
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  flexRow: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
  productTitle: {
    lineHeight: 25,
    width: "70%",
    marginBottom: 10,
  },
  actionButton: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 10,
  },
  productImage: {
    width: 120,
    height: 120,
    resizeMode: "cover",
    marginRight: 10,
  },
  certificationImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  modalContent: {
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
  },
});
