import React, { useState } from "react";
import {
  StyleSheet,
  SafeAreaView,
  View,
  ScrollView,
  Dimensions,
  Alert,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useNavigation } from "@react-navigation/native";

//conponents
import { H1, Text } from "../components/Typografy/Index";
import { ProductItemList } from "../components/ItemProduct/Index";
import { LabelButton } from "../components/Button/Index";

//hook
import { useProduct } from "../contexts/ProductContext";

//interface
import { ProductItemProps } from "../components/ItemProduct/Add/Index";

export const PurcasheMode = () => {
  const {
    productList,
    toDeleteProductList,
    deleteProductById,
    setToDeleteProductList,
  } = useProduct();
  const [currentProductList, setCurrentProductList] = useState(productList);

  const { navigate } = useNavigation();

  const onSwipeValueChange = (swipeData: any) => {
    const { key, value } = swipeData;

    if (value < -Dimensions.get("window").width) {
      let newList;

      newList = currentProductList.filter((product: ProductItemProps) => {
        if (product.id != key) {
          return product;
        }
      });

      setCurrentProductList(newList);
    }
  };

  const renderItemProduct = (data: any) => (
    <ProductItemList
      id={data.item.id}
      title={data.item.title}
      productImage={data.item.productImage}
      quantity={data.item.quantity}
      isCertified={data.item.isCertified}
      certifications={data.item.certifications}
      variant="checkable"
    />
  );

  const renderHiddenItemProduct = () => (
    <View style={styles.rowBack}>
      <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
        <Text style={styles.backTextWhite}>Excluir</Text>
      </View>
    </View>
  );

  const handleFinishPurcashe = () => {
    if (toDeleteProductList[0] === undefined) {
      Alert.alert(
        "Você ainda não comprou nada.",
        "Tem certeza que quer finalizar a compra?",
        [
          {
            text: "Não",
            style: "cancel",
          },
          {
            text: "Sim",
            onPress: () => {
              navigate("Main");
            },
          },
        ],
        {
          cancelable: true,
        }
      );
    } else {
      productList.map((product, index) => {
        if (
          toDeleteProductList[index] != undefined &&
          toDeleteProductList[index][1] === true
        ) {
          //exclui o item
          // deleteProductById(product.id);

          //atualiza os ids
          let newList = toDeleteProductList;

          newList.map((newItem: [ProductItemProps, boolean], index: number) => {
            newItem[0].id = index;
          });

          setToDeleteProductList(newList);
        }
      });

      navigate("Main");
    }
  };

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

        <View style={{ flex: 1 }}>
          {productList.length != 0 && (
            <SwipeListView
              data={currentProductList}
              onSwipeValueChange={onSwipeValueChange}
              renderItem={renderItemProduct}
              renderHiddenItem={renderHiddenItemProduct}
              disableRightSwipe
              rightOpenValue={-Dimensions.get("window").width}
              previewRowKey={"0"}
              previewOpenValue={-40}
              previewOpenDelay={3000}
              useNativeDriver={false}
              keyExtractor={(item) => item.id.toString()}
              scrollEnabled={false}
              style={{ height: "100%" }}
            />
          )}
        </View>

        <LabelButton
          label="Finalizar"
          onPress={handleFinishPurcashe}
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
  backTextWhite: {
    color: "#FFF",
  },
  rowFront: {
    alignItems: "center",
    backgroundColor: "#CCC",
    borderBottomColor: "black",
    borderBottomWidth: 1,
    justifyContent: "center",
    height: 80,
  },
  rowBack: {
    marginTop: 10,
    alignItems: "center",
    backgroundColor: "red",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 15,
  },
  backRightBtn: {
    alignItems: "center",
    bottom: 0,
    justifyContent: "center",
    position: "absolute",
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: "red",
    right: 0,
    borderRadius: 15,
  },
});
