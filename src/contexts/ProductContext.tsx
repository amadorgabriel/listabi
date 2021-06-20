import React, { createContext, useContext, useState, ReactNode } from "react";

import { ProductItemProps } from "../components/ItemProduct/Index";

interface ProductContextData {
  modalIsActive: boolean;
  handleModal: (closeModal?: boolean) => void;
  currentProduct: ProductItemProps;
  setCurrentProduct: (currentProduct: ProductItemProps) => void;
  firstProductWasAdded: boolean
}

interface ProductContextProviderProps {
  children: ReactNode;
}

export const ProductContext = createContext({} as ProductContextData);

export function ProductContextProvider({
  children,
}: ProductContextProviderProps) {
  const [modalIsActive, setModalIsActive] = useState(false);
  const [currentProduct, setCurrentProduct] = useState({} as ProductItemProps);
  const [firstProductWasAdded, setFirstProductWasAdded] = useState(true);

  function handleModal(closeModal?: boolean) {
    if (closeModal === undefined) {
      setModalIsActive(!modalIsActive);
    } else {
      setModalIsActive(false);
    }
  }

  return (
    <ProductContext.Provider
      value={{ modalIsActive, handleModal, currentProduct, setCurrentProduct, firstProductWasAdded }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};
