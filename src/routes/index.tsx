import React from "react";
import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import StackRoutes from "./stack.routes";
import { theme } from "../../src/styles/colors/index";

const Routes: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <StackRoutes />
        </NavigationContainer>
        
        <StatusBar style="light" />
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default Routes;
