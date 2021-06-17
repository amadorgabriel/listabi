import React, { useState } from "react";
import { TextInputProps } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { Input, ViewInput } from './styles'

export interface InputProps extends TextInputProps{
  placeholder: string;
  onChange: () => void;
  hasIcon?: boolean;
  hasFocus?: boolean;
  variant?: "password" | "emailAddress" | "none";
}

export const OutlineInput: React.FC<InputProps> = ({
  placeholder,
  onChange,
  hasIcon = false,
  hasFocus = false,
  variant = 'none',
  ...rest
}: InputProps) => {

  const [isFocused, setIsFocused] = useState(false)

  hasFocus = isFocused

  return (
    hasIcon ? (
        <ViewInput hasFocus={isFocused}>
          <Ionicons name="search" size={24} color="#828282" />  
          <Input.IconVariant 
            onChange={onChange}
            placeholder={placeholder}
            onFocus={() => setIsFocused(true)} 
            onBlur={() => setIsFocused(false)}
            autoCompleteType='off'
            textContentType={variant}
            placeholderTextColor="gray"
            {...rest} 

          />
        </ViewInput>
      ): (
        <Input.OutlineVariant 
          onChange={onChange} 
          placeholder={placeholder} 
          onFocus={() => setIsFocused(true)} 
          onBlur={() => setIsFocused(false)} 
          hasFocus={isFocused}
          placeholderTextColor="gray"
          textContentType={variant}

          {...rest} 
          />
      )
  );
};
