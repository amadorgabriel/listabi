import React from "react";

import { Feather } from "@expo/vector-icons";
import { CounterContainer, CounterIndex } from "./styles";

import { IconButton } from "../../../components/Button/Index";
import { Text } from "../../../components/Typografy/Index";

export const CounterInput: React.FC = () => {
  return (
    <CounterContainer>
      <IconButton size="small" color="secondary" onPress={() => {}}>
        <Feather name="minus" size={20} color="white" />
      </IconButton>

      <CounterIndex>
        <Text.SubtitleBold style={{fontSize: 16}}>00</Text.SubtitleBold>
      </CounterIndex>

      <IconButton size="small" onPress={() => {}}>
        <Feather name="plus" size={20} color="white" />
      </IconButton>
    </CounterContainer>
  );
};
