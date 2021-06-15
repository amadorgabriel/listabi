import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Home } from '../pages/Home';
import { Extract } from '../pages/Extract'
import { SearchProduct } from '../pages/SearchProduct'

const stackRoutes = createStackNavigator()

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="none"
      initialRouteName="Adicionar"
        screenOptions={{
          cardStyle: {
            backgroundColor: '#fff'
          }
      }}
    >

      <stackRoutes.Screen 
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
      />

    </stackRoutes.Navigator>
  )
}

export default AppRoutes
