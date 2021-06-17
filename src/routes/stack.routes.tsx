import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../pages/Home';
import { Extract } from '../pages/Extract'
import { SearchProduct } from '../pages/SearchProduct'
import { Login } from '../pages/Login'

import TabRoutes from "./tab.routes";

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      initialRouteName="Login"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff'
          }
      }}
    >

      {/* <stackRoutes.Screen 
        name="Home"
        component={Home}
      />

      <stackRoutes.Screen 
        name="Adicionar"
        component={SearchProduct}
      />

      <stackRoutes.Screen 
        name="Extrato"
        component={Extract}
      /> */}

      <stackRoutes.Screen 
        name="Login"
        component={Login}
      />
      
      <stackRoutes.Screen 
        name="Main"
        component={TabRoutes}
      />

    </stackRoutes.Navigator>
  )
}

export default AppRoutes
