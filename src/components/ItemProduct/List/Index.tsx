import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//components
import { Text } from "../../Typografy/Index";
import { CounterInput } from "../../Input/Index";
import { ProductContainer, ProductImage } from "./styles";

//hook
import { useProduct } from "../../../contexts/ProductContext";

export interface ProductItemListProps {
  id: number;
  title: string;
  productImage: string;
  quantity: number;
  variant?: "checkable" | "default";
  style?: {};
}

export const ProductItemList: React.FC<ProductItemListProps> = ({
  id,
  title,
  productImage,
  quantity = 0,
  variant = "default",
  style,
}) => {
  const { deleteProductFromStorage } = useProduct();

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
        <ProductContainer.MainContentTitle>
          <Text.Medium style={{ maxWidth: 165, marginBottom: 5 }}>
            {title}
          </Text.Medium>
          <CounterInput style={{ alignSelf: "flex-start" }} />
        </ProductContainer.MainContentTitle>

        <ProductContainer.MainContentClose
          onPress={() => {
            // deleteProductFromStorage(id);
          }}
        >
          <Ionicons name="close" size={20} color="black" />
        </ProductContainer.MainContentClose>
      </ProductContainer.MainContent>
    </ProductContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "70%",
  },
});
