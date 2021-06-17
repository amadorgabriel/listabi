import styled from "styled-components/native";

import { fonts } from '../../../styles/fonts'
import { InputProps } from './index'

export interface ViewProps {
  hasFocus?: boolean
}

export const ViewInput = styled.View<ViewProps>`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #1A1423;
  border-radius: 8px;
  padding: 10px 15px 10px 15px;
  border-color: ${({hasFocus}) => hasFocus === false ? '#5A5A5A' : '#1A1423'};
`;

export const Input:any = styled.TextInput`
  color: ${({theme}) => theme.colors.typografy.paragraph.tertiary}
`;

Input.IconVariant = styled(Input)`
  width: 100%;
  height: 100%;
  flex: 1;
  font-size: 16px;
  padding-left: 12px;
  font-family: ${fonts.text};

`;

Input.OutlineVariant = styled(Input)<InputProps>`
  width: 100%;
  font-size: 16px;
  font-family: ${fonts.text};
  border: 1px solid #5A5A5A;
  border-color: ${({hasFocus}) => hasFocus === false ? '#5A5A5A' : '#1A1423'};
  border-radius: 8px;
  padding: 10px 15px;

  font-weight: 800;

`;

