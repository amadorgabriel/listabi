import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes";
import { theme } from "../../src/styles/colors/index";

const Routes: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          {/* <StackRoutes> */}

          <TabRoutes />
          {/* </StackRoutes> */}
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default Routes;
