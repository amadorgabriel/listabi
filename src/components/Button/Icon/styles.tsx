import styled from "styled-components/native";

import { StyledIconButtonProps } from "../interface";

export const TouchableButton: any = styled.TouchableHighlight<StyledIconButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 100%;
  max-width: 65px;
  height: 65px;

  border-radius: 10px;
  background-color: ${({ theme, color }) => {
    switch (color) {
      case "white":
        return theme.colors.button.white;

      case "secondary":
        return theme.colors.button.secondary;

      default:
        return theme.colors.button.primary;
    }
  }};
`;

