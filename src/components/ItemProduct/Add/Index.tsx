import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

//components
import { H3 } from "../../Typografy/Index";
import { LabelButton } from "../../Button/Index";
import { ProductContainer, ProductImage } from "./styles";
import CertifiedIcon from "../../../assets/certified-icon.svg";

//hook
import { useProduct } from "../../../contexts/ProductContext";

type CertificationProduct = {
  name: string;
  certificateImage?: string;
}

export interface ProductItemProps extends ViewProps {
  title: string;
  productImage?: string;
  isCertified?: boolean;
  quantity?: number;
  certifications: [];
  style?: {};
}

export const AddableProduct: React.FC<ProductItemProps> = ({
  title = "Carregando",
  productImage = "https://drogariaguarulhos.com.br/media/catalog/product/placeholder/default/notfound.png",
  isCertified = false,
  quantity = 0,
  certifications = [],
  style,
}: ProductItemProps) => {
  const { handleModal, setCurrentProduct } = useProduct();
  const productSelected: ProductItemProps = {
    title,
    productImage,
    isCertified,
    quantity,
    certifications,
  };

  return (
    <ProductContainer isCertified={isCertified} style={style}>
      <ProductImage
        style={{
          resizeMode: "cover",
        }}
        source={{
          uri: productImage,
        }}
      />

      <ProductContainer.MainContent>
        <H3>{title}</H3>

        <View style={styles.actionView}>
          <LabelButton
            size="small"
            label="Adicionar"
            onPress={() => { handleModal(), setCurrentProduct(productSelected)  }}
            style={styles.button}
          />

          {isCertified === true && (
            <CertifiedIcon style={{ width: 18, height: 18 }} />
          )}
        </View>
      </ProductContainer.MainContent>
    </ProductContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "70%",
  },
  actionView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    marginBottom: 5,
  },
});
