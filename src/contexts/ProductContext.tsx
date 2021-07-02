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
  deleteProductById: (id: number) => void;
  updateProductById: (id: number, product: ProductItemProps ) => void;
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

      if (firstProduct === false || firstProduct === null) {
        await AsyncStorage.setItem("@firstProductWasAdded", "false");
        setFirstProductWasAdded(false);
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

  async function setProductFromStorageOnState() {
    try {
      // await AsyncStorage.clear();

      setFirstProductWasAddedToStorage();

      const jsonValue = await AsyncStorage.getItem("@myProductList");

      if (jsonValue != null) {
        setProductList(JSON.parse(jsonValue));
      }
    } catch (error) {
      throw new Error();
    }
  }

  async function deleteProductById(id: number) {
    let listWithNewId = [] as ProductItemProps[];

    await setProductFromStorageOnState();

    for (let index = 0; index < productList.length; index++) {
      const element = productList[index] as ProductItemProps;

      if (element.id === id) {
        let newList;

        //remove o item
        newList = productList.filter((product: ProductItemProps) => {
          if (product.id != element.id) {
            return product;
          }
        });

        //atualiza o id
        newList.map((newItem: ProductItemProps, index: number) => {
          newItem.id = index;
          listWithNewId.push(newItem);
        });

        break;
      }
    }

    setProductList(listWithNewId);

    //seta no storage
    const jsonList = JSON.stringify(listWithNewId);
    await AsyncStorage.setItem("@myProductList", jsonList);
  }

  async function updateProductById(id: number, product: ProductItemProps){
    await setProductFromStorageOnState();
    
    for (let index = 0; index < productList.length; index++) {
      const element = productList[index] as ProductItemProps;

      if (element.id === id) {
        let newList = [] as ProductItemProps[];
        
        const updatedProduct: ProductItemProps = {
          id: product.id,
          title: product.title,
          quantity: product.quantity,
          productImage: product.productImage,
          isCertified: product.isCertified,
          certifications: product.certifications
        }
               
        //insere o produto numa nova lista - imutabilidade
        productList.map((productItem: ProductItemProps) => {
          if (productItem.id !== updatedProduct.id) {
            newList.push(productItem);
          }else{
            newList.push(updatedProduct) ;
          }
        });

        setProductList(newList);

        //seta no storage
        const jsonList = JSON.stringify(newList);
        await AsyncStorage.setItem("@myProductList", jsonList);

        break;
      }
    }

  }

  useEffect(() => {
    setProductFromStorageOnState();
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
        deleteProductById,
        updateProductById
      }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export const useProduct = () => {
  return useContext(ProductContext);
};
