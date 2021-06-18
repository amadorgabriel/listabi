import styled from 'styled-components/native'

export const ProductImage = styled.Image`
  width: 130px;
  height: 130px;
`

export const ProductContainer:any = styled.View`
  width: 100%;
  max-width: 150px;
  border: 1px solid #F56960;
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
