import { TouchableHighlightProps } from 'react-native';

interface ButtonProps extends TouchableHighlightProps{
  label: string;
  onPress: () => void;
}

export interface StyledButtonProps extends ButtonProps{
  size?: "small" | "medium" | "large";
  variant?: "primary" | "outlined";
  disabled?: boolean;
  color?: string;
}
