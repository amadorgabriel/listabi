import styled from 'styled-components/native'

export const ProductImage = styled.Image`
  width: 130px;
  height: 130px;
`

export const ProductContainer:any = styled.View`
  width: 100%;
  max-width: 150px;
  min-height: 230px;
  border: 1px solid ${({theme, isCertified}) => isCertified === true ? theme.colors.cards.secondary : theme.colors.cards.primary };
  border-radius: 12px;
  padding: 10px;

  display: flex;
  flex-direction: column;
`

ProductContainer.MainContent = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;

`
