import { TextInputProps } from 'react-native';

type InputVariantType = "outline" | "flat" 

export interface InputProps extends TextInputProps{
  placeholder: string;
  variant?: InputVariantType;
  onChange: () => void;
}

export interface IconInputProps {
  placeholder: string;
  onChange: () => void;
}

