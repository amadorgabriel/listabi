import React from "react";

import { Touchable } from "./styles";
import { StyledButtonProps } from "./interface";

export const Button: React.FC<StyledButtonProps> = ({
  label,
  onPress,
}: StyledButtonProps) => {
  return (
    <Touchable onPress={onPress}>
      <Touchable.Button>
        <Touchable.Label>{label}</Touchable.Label>
      </Touchable.Button>
    </Touchable>
  );
};
