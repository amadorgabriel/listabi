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
  const [productList, setProductList] = useState([] as ProductItemProps[]);

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
        productList[0] == undefined ||
        firstProduct === false ||
        firstProduct === null
      ) {
        await AsyncStorage.setItem("@firstProductWasAdded", "false");
        setFirstProductWasAdded(false);

      } else if (firstProduct === true) {
        setFirstProductWasAdded(true);
      } else {
        setFirstProductWasAdded(true);
      }
    } catch (error) {
      throw new Error();
    }
  }

  async function addProductToStorage() {
    try {
      //sobrescreve um novo id
      let newCurrentProduct = currentProduct;
      newCurrentProduct.id = productList.length;
      setProductList([...productList, newCurrentProduct]);

      console.log("Ao adicionar: " +  newCurrentProduct.id);

      //seta firstProductWasAdded como adicionado
      await AsyncStorage.setItem("@firstProductWasAdded", "true");
      setFirstProductWasAdded(true);

      //adiciona o produto
      const jsonProduct = JSON.stringify([...productList, newCurrentProduct]);
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
    let listWithNewId = [] as ProductItemProps[];
    
    productList.map((element: ProductItemProps) => {
      
      if (element.id === id) {
        console.log("Elemento para deletar:" +  element.id);
        let newList
        
        //remove o item
        newList = productList.filter((product: ProductItemProps) => {
          if (product.id != element.id) {
            return product;
          }
        });

        console.log("Nova lista:" +  newList );
        //atualiza o id
        // newList.map((newItem: ProductItemProps, index: number) => {
        //   let newCurrentProduct = newItem;
        //   newCurrentProduct.id = index;
        //   listWithNewId = [...listWithNewId, newCurrentProduct];
        // });
      }
    });
    
    console.log("------------------------" );
    // console.log("Nova Lista: " +  listWithNewId );
    setProductList(listWithNewId);

    //seta no storage
    const jsonList = JSON.stringify(listWithNewId);
    await AsyncStorage.setItem("@myProductList", jsonList);

    // console.log(listWithNewId);
  }

  useEffect(() => {
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
