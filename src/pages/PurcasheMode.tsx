import React, { useState } from "react";
import { StyleSheet, SafeAreaView, View, ScrollView, Dimensions, Animated, Alert } from "react-native";
import { SwipeListView } from 'react-native-swipe-list-view';

import { theme } from "../styles/colors";

//conponents
import { H1, Text } from "../components/Typografy/Index";
import { ProductItemList } from "../components/ItemProduct/Index";
import { LabelButton } from "../components/Button/Index";

//hook
import { useProduct } from "../contexts/ProductContext";

//interface
import { ProductItemProps } from "../components/ItemProduct/Add/Index";

const rowTranslateAnimatedValues = {} as any;

Array(20)
  .fill('')
  .forEach((_, i) => {
    rowTranslateAnimatedValues[`${i}`] = new Animated.Value(1);
  });

export const PurcasheMode = () => {
  const { productList } = useProduct();
  const [animationIsRunning, setAnimationIsRunning] = useState(false)
  const [productToDeleteList, setProductToDeleteList] = useState([] as ProductItemProps[])

  const onSwipeValueChange = (swipeData: any) => {
    const { key, value } = swipeData;

    if (
      value < -Dimensions.get('window').width &&
      !animationIsRunning
    ) {
      setAnimationIsRunning(true)

      Animated.timing(rowTranslateAnimatedValues[key], {
        toValue: 0,
        duration: 200,
      } as any).start(() => {

        // let newData = [...productList];
        // const prevIndex = productList.findIndex(item => item.id === key);
        // newData.splice(prevIndex, 1);
        
        // console.log(newData)
        
        Alert.alert('excluido')

        // setListData(newData);
        // this.animationIsRunning = false;
        // setProductToDeleteList[[...toDeleteList, swipeData ]]
      })
    }
  }

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

        <View>
          {productList.length != 0 && (

            <SwipeListView
              disableRightSwipe
              rightOpenValue={-Dimensions.get('window').width}
              previewRowKey={'0'}
              previewOpenValue={-40}
              previewOpenDelay={3000}
              useNativeDriver={false}

              data={productList as ProductItemProps[]}
              onSwipeValueChange={onSwipeValueChange}
              renderItem={(data) => (
                <Animated.View
                  style={
                    {
                      height: rowTranslateAnimatedValues[
                        data.item.id
                      ].interpolate({
                        inputRange: [0, 0],
                        outputRange: [0, 112],
                      }),
                    }
                  }
                >
                  <ProductItemList
                    id={data.item.id}
                    title={data.item.title}
                    productImage={data.item.productImage}
                    quantity={data.item.quantity}
                    isCertified={data.item.isCertified}
                    certifications={data.item.certifications}
                    variant="checkable"
                  />
                </Animated.View>
              )
              }

              renderHiddenItem={(data, rowMap) => (
                <View style={styles.rowBack}>
                  <View style={[styles.backRightBtn, styles.backRightBtnRight]}>
                    <Text style={styles.backTextWhite}>Excluir</Text>
                  </View>
                </View>
              )}
            />
          )
          }
        </View>

        <LabelButton
          label="Finalizar"
          onPress={() => { }}
          size="large"
          style={{ marginTop: 35, width: 300 }}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

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
    color: '#FFF',
  },
  rowFront: {
    alignItems: 'center',
    backgroundColor: '#CCC',
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80
  },
  rowBack: {
    marginTop: 10,
    alignItems: 'center',
    backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
    borderRadius: 15,
  },
});
