import React from "react";

import { Feather } from "@expo/vector-icons";
import { CounterContainer, CounterIndex } from "./styles";
import { IconButton } from "../../../components/Button/Index";
import { Text } from "../../../components/Typografy/Index";

export interface CounterInputProps {
  quantity?: number;
  style?: {}
}

export const CounterInput: React.FC<CounterInputProps> = ({style}:CounterInputProps) => {
  return (
    <CounterContainer style={style}>
      <IconButton size="small" color="secondary" onPress={() => {}}>
        <Feather name="minus" size={18} color="white" />
      </IconButton>

      <CounterIndex>
        <Text.SubtitleBold style={{fontSize: 14}}>00</Text.SubtitleBold>
      </CounterIndex>

      <IconButton size="small" onPress={() => {}}>
        <Feather name="plus" size={18} color="white" />
      </IconButton>
    </CounterContainer>
  );
};
