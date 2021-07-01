import React from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

//components
import { Text } from "../../Typografy/Index";
import { CounterInput } from "../../Input/Index";
import { ProductContainer, ProductImage } from "./styles";

//hook
import { useProduct } from "../../../contexts/ProductContext";
import { CertificationProduct, ProductItemProps } from "../Add/Index";

export interface ProductItemListProps {
  id: number;
  title: string;
  productImage: string;
  quantity: number;
  variant?: "checkable" | "default";
  style?: {};

  isCertified?: boolean;
  certifications?: CertificationProduct[];
}

export const ProductItemList: React.FC<ProductItemListProps> = ({
  id,
  title,
  productImage,
  quantity = 1,
  variant = "default",
  style,

  isCertified = false,
  certifications = []
}) => {
  const { deleteProductById } = useProduct();

  const currentProduct: ProductItemProps = {
    id,
    title,
    productImage,
    quantity,
    isCertified,
    certifications
  } 

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
          <CounterInput hasQuantity product={currentProduct} style={{ alignSelf: "flex-start" }} />
        </ProductContainer.MainContentTitle>

        <ProductContainer.MainContentClose
          onPress={() => {
            deleteProductById(id);
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
