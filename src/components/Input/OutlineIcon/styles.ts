import styled from "styled-components/native";

import { IconInputProps } from '../interface'
import { fonts } from '../../../styles/fonts'

export const ViewInput = styled.View`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border: 1px solid #1A1423;
  border-radius: 10px;
  padding: 10px 15px;

  margin-top: 25px;
  margin-bottom: 35px;
`;

export const InputIcon = styled.TextInput<IconInputProps>`
  /* width: 100%; */
  height: 100%;
  flex: 1;
  font-size: 16px;
  padding-left: 10px;
  font-family: ${fonts.text}


`;

