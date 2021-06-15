import React from "react";
import { Ionicons } from '@expo/vector-icons';

import { IconInputProps } from '../interface'
import { InputIcon, ViewInput } from './styles'

export const OutlineIconInput: React.FC<IconInputProps> = ({
  placeholder,
  onChange,
  ...rest
}: IconInputProps) => {

  return (
    <ViewInput>
      {/* <Ionicons name="search" size={24} color="black" /> */}
      <Ionicons name="search" size={24} color="#828282" />  
      <InputIcon onChange={onChange} placeholder={placeholder} {...rest} />
    </ViewInput>
  );
};
