import React from "react";
import { View, StyleSheet, ViewProps } from "react-native";

import { H3 } from "../Typografy/Index";
import { LabelButton } from "../Button/Index";
import { ProductContainer, ProductImage } from "./styles";

import CertifiedIcon from "../../assets/certified-icon.svg";

export interface ProductItemProps extends ViewProps {
  name?: string;
  productImage?: string;
  isCertified?: string;
  quantity?: number;
  style: {};
}

export const ProductItem: React.FC<ProductItemProps> = ({ style }:ProductItemProps) => {
  return (
    <ProductContainer style={style}>
      <ProductImage
        style={{
          resizeMode: "contain",
        }}
        source={{
          uri: "https://www.nestle.com.br/images/default-source/produtos/passatempo-biscoito-recheado-morango.png?sfvrsn=2ff70415_6",
        }}
      />

      <ProductContainer.MainContent>
        <H3>Bolacha Passatempo</H3>

        <View style={styles.actionView}>
          <LabelButton
            size="small"
            label="Adicionar"
            onPress={() => {}}
            style={styles.button}
          />

          <CertifiedIcon style={{ width: 18, height: 18 }} />
        </View>
      </ProductContainer.MainContent>
    </ProductContainer>
  );
};

const styles = StyleSheet.create({
  button: {
    width: "70%",
    // maxWidth: 80
  },
  actionView: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 5
  },
});
