import { createContext } from 'react'


interface ProductContextData {
  onOpenModal: () => void
}

interface ProductContextProviderProps {
  children: React.ReactNode
}

export const ProductContext = createContext({} as ProductContextData) 



export function ProductContextProvider({children}:ProductContextProviderProps){

  const onOpenModal = () => {}

  return (
    <ProductContext.Provider value={{onOpenModal}} >
      {children}
    </ProductContext.Provider>
  )
}