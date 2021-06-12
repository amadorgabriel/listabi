import styled from "styled-components/native";

import fonts from "../../styles/fonts";
import { StyledButtonProps } from "./interface";

export const Touchable: any = styled.TouchableHighlight<StyledButtonProps>`
  width: 100%;
  background-color: transparent;
  border-radius: 10px;
  opacity: ${({ disabled }) => (disabled === true ? 0.5 : 1)};
`;

Touchable.Button = styled.View<StyledButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 10px;
  background-color: ${({ variant }) => {
    switch (variant) {
      case "accept":
        return "#28C313";

      case "reject":
        return "#FF3C38";

      case "outlined":
        return "#FFF";
        
      default:
        return "#6ABF6A";
    }
  }};

  border: ${({ variant }) => {
    switch (variant) {
      case "outlined":
        return "2px solid #6ABF6A";

      default:
        return "none";
    }
  }};

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
  color: ${({ variant }) => {
    switch (variant) {
      case "outlined":
        return "#6ABF6A";

      default:
        return "#fff";
    }
  }};
  font-weight: 800;
  text-transform: capitalize;
  text-align: center;
`;
