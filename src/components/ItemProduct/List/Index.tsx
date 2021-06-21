import React from "react";
import { StyleSheet, View } from "react-native";

//components
import { Text } from "../../Typografy/Index";
import { CounterInput } from "../../Input/Index";
import { ProductContainer, ProductImage } from "./styles";
import CertifiedIcon from "../../../assets/certified-icon.svg";

import { Ionicons } from "@expo/vector-icons";

export interface ProductItemListProps {
  title: string;
  productImage?: string;
  quantity?: number;
  variant: "checkable" | "default";
  style?: {};
}

export const ProductItemList: React.FC<ProductItemListProps> = ({
  title = "Carregando",
  productImage = "https://drogariaguarulhos.com.br/media/catalog/product/placeholder/default/notfound.png",
  quantity = 0,
  style,
}) => {
  return (
    <ProductContainer style={style}>
      <ProductImage
        style={{
          resizeMode: "cover",
        }}
        source={{
          uri: productImage,
        }}
      />
      <ProductContainer.MainContent>
        <View>
          <Text.Medium>{title}</Text.Medium>
          <CounterInput />
        </View>

        <View>
          <Ionicons name="close" size={24} color="black" />
        </View>
      </ProductContainer.MainContent>
    </ProductContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "70%",
  },
});
