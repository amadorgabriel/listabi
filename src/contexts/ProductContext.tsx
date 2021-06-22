import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductItemProps } from "../components/ItemProduct/Add/Index";

interface ProductContextData {
  productList: ProductItemProps[];
  modalIsActive: boolean;
  currentProduct: ProductItemProps;
  firstProductWasAdded: boolean;

  handleModal: (closeModal?: boolean) => void;
  setCurrentProduct: (currentProduct: ProductItemProps) => void;
  addProductToStorage: () => void;
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
  const [productList, setProductList] = useState([{} as ProductItemProps]);

  const [firstProductWasAdded, setFirstProductWasAdded] = useState(false);

  function handleModal(closeModal?: boolean) {
    if (closeModal === undefined) {
      setModalIsActive(!modalIsActive);
    } else {
      setModalIsActive(false);
    }
  }

  async function setFirstProductWasAddedToStorage() {
    try {
      const firstProduct = Boolean(
        await AsyncStorage.getItem("@firstProductWasAdded")
      );

      const itemList = await AsyncStorage.getItem("@myProductList");

      if (firstProduct == null || firstProduct == undefined) {
        await AsyncStorage.setItem("@firstProductWasAdded", "false");
        setFirstProductWasAdded(false);
      } else if (firstProduct == false || itemList != null) {
        await AsyncStorage.setItem("@firstProductWasAdded", "true");
        setFirstProductWasAdded(true);
      }
    } catch (error) {
      throw new Error();
    }
  }

  async function addProductToStorage() {
    try {
      //checka se o estado inicial da lista de produtos é um obj vazio
      if(productList.length == 1 && !firstProductWasAdded ){
        setProductList([currentProduct]);
      }else{
        setProductList([...productList, currentProduct]);
      }
      
      setFirstProductWasAddedToStorage();

      const jsonProduct = JSON.stringify([...productList, currentProduct]);
      await AsyncStorage.setItem("@myProductList", jsonProduct);
    } catch (error) {
      throw new Error();
    }
  }

  async function getProductListStorage() {
    try {
      // await AsyncStorage.clear();

      const jsonValue = await AsyncStorage.getItem("@myProductList");

      if (jsonValue != null) {
        setProductList(JSON.parse(jsonValue));
      }
    } catch (error) {
      throw new Error();
    }
  }

  useEffect(() => {
    //atualiza o estado inicial da lista com os dados já existentes no async storage
    getProductListStorage();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        modalIsActive,
        handleModal,
        currentProduct,
        setCurrentProduct,
        firstProductWasAdded,
        addProductToStorage,
        productList,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};
