import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

import { Login } from '../pages/Login'
import { NameSignUp } from '../pages/SignUp/Name'
import { EmailSignUp } from '../pages/SignUp/Email'
import { CPFSignUp } from '../pages/SignUp/CPF'
import { PasswordSignUp } from '../pages/SignUp/Password'

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
      <stackRoutes.Screen 
        name="Main"
        component={TabRoutes}
      />
      
      <stackRoutes.Screen 
        name="Login"
        component={Login}
      />

      <stackRoutes.Screen 
        name="SignUpName"
        component={NameSignUp}
      />

      <stackRoutes.Screen 
        name="SigUpEmail"
        component={EmailSignUp}
      />

      <stackRoutes.Screen 
        name="SigUpCPF"
        component={CPFSignUp}
      />

      <stackRoutes.Screen 
        name="SigUpPassword"
        component={PasswordSignUp}
      />

    </stackRoutes.Navigator>
  )
}

export default AppRoutes
