import React from "react"
import { NavigationContainer } from "@react-navigation/native" 
import { ThemeProvider } from "styled-components/native"

import StackRoutes from "./stack.routes";
import TabRoutes from "./tab.routes"
import { theme } from '../../src/styles/colors/index'

const Routes: React.FC = () => {
  return(
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <TabRoutes /> 
      </NavigationContainer>
    </ThemeProvider>
  )
}

export default Routes