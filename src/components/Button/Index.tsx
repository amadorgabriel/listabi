import React from "react";

import { Touchable } from "./styles";
import { StyledButtonProps } from "./interface";

export const Button: React.FC<StyledButtonProps> = ({
  label,
  onPress,
  size,
  disabled = false, 
  variant = "primary",
  ...rest
}: StyledButtonProps) => {
  
  return (
    <Touchable onPress={onPress} disabled={disabled} {...rest}>
      <Touchable.Button size={size} variant={variant} >
        <Touchable.Label size={size} variant={variant}> {label}</Touchable.Label>
      </Touchable.Button>
    </Touchable>
  );
};
