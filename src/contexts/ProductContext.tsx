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
  deleteProductFromStorage: (id: number) => void;
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

      if (
        productList == null ||
        productList == undefined ||
        productList[0].title == undefined
      ) {
        await AsyncStorage.setItem("@firstProductWasAdded", "false");
        setFirstProductWasAdded(false);

        console.log(firstProduct)
        if(firstProduct ){
          setFirstProductWasAdded(true);
        }

      } else {
        setFirstProductWasAdded(true);
      }
    } catch (error) {
      throw new Error();
    }
  }

  async function addProductToStorage() {
    try {
      //checka se o estado inicial da lista de produtos é um obj vazio
      let newCurrentProduct = currentProduct;

      if (Object.keys(productList[0]).length === 0) {
        newCurrentProduct.id = productList.length;
        setProductList([newCurrentProduct]);
      } else {
        newCurrentProduct.id = productList.length + 1;
        setProductList([...productList, newCurrentProduct]);
      }

      //seta firstProductWasAdded como adicionado
      await AsyncStorage.setItem("@firstProductWasAdded", "true");
      setFirstProductWasAdded(true);

      //adiciona o produto
      const jsonProduct = JSON.stringify([...productList, currentProduct]);
      await AsyncStorage.setItem("@myProductList", jsonProduct);
    } catch (error) {
      throw new Error();
    }
  }

  async function getProductListStorage() {
    try {
      await AsyncStorage.clear();

      setFirstProductWasAddedToStorage();

      const jsonValue = await AsyncStorage.getItem("@myProductList");

      if (jsonValue != null) {
        setProductList(JSON.parse(jsonValue));
      }
    } catch (error) {
      throw new Error();
    }
  }

  async function deleteProductFromStorage(id: number) {
    let deleteObject = {};
    let newList = productList;

    
    productList.map((element: ProductItemProps, index: number) => {
      if (element.id == currentProduct.id) {
        deleteObject = element;
        setProductList(newList.splice(index, 1));
        
        console.log(productList)

        productList.map((element: ProductItemProps, index: number) => {
          let newCurrentProduct = element;
          newCurrentProduct.id = index
          let listWithNewId = [] as any[] 
          listWithNewId = ([...listWithNewId, newCurrentProduct])
          
          console.log(listWithNewId)
          setProductList(listWithNewId);
        })
         
      }
    });
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
        deleteProductFromStorage,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};
