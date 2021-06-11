import styled from "styled-components/native";
import { TextProps, ViewProps, TouchableHighlightProps } from "react-native";

import fonts from "../../styles/fonts";
import colors from "../../styles/colors";
import { StyledButtonProps } from "./interface";

export const Touchable: any = styled.TouchableHighlight<StyledButtonProps>`
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
`;

Touchable.Button = styled.View<StyledButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ color }) => color || colors.green};
  padding: ${({ size }) => {
    switch (size) {
      case "small":
        return "4px 0";

      case "medium":
        return "8px 0";

      default:
        return "12px 0";
    }
  }};
`;

Touchable.Label = styled.Text<StyledButtonProps>`
  font-size: ${({ size }) => {
    switch (size) {
      case "small":
        return "14px";

      case "medium":
        return "15px";

      default:
        return "16px";
    }
  }};
  /* font-family: ${fonts.heading}; */
  color: #fff;
  text-transform: capitalize;
  text-align: center;
`;
