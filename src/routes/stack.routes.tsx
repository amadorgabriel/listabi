import React from "react";
import { Button, Text, Pressable } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import { Ionicons } from "@expo/vector-icons";

import { Login } from "../pages/Login";
import { NameSignUp } from "../pages/SignUp/Name";
import { EmailSignUp } from "../pages/SignUp/Email";
import { CPFSignUp } from "../pages/SignUp/CPF";
import { PasswordSignUp } from "../pages/SignUp/Password";
import { SelectMarket } from "../pages/SelectMarket";
import { PurcasheMode } from "../pages/PurcasheMode";

import TabRoutes from "./tab.routes";

const stackRoutes = createStackNavigator();

const AppRoutes: React.FC = () => {
  return (
    <stackRoutes.Navigator
      headerMode="float"
      initialRouteName="Login"
      screenOptions={{
        cardStyle: {
          backgroundColor: "#fff",
        },
      }}
    >
      <stackRoutes.Screen
        name="Main"
        component={TabRoutes}
        options={{ headerShown: false }}
      />

      <stackRoutes.Screen
        name="Login"
        component={Login}
        options={{ headerShown: false }}
      />

      <stackRoutes.Screen
        name="SignUpName"
        component={NameSignUp}
        options={{ headerShown: false }}
      />

      <stackRoutes.Screen
        name="SigUpEmail"
        component={EmailSignUp}
        options={{ headerShown: false }}
      />

      <stackRoutes.Screen
        name="SigUpCPF"
        component={CPFSignUp}
        options={{ headerShown: false }}
      />

      <stackRoutes.Screen
        name="SigUpPassword"
        component={PasswordSignUp}
        options={{ headerShown: false }}
      />

      <stackRoutes.Screen
        name="SelectMarket"
        component={SelectMarket}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 25 }}
            >
              <Ionicons
                name="md-chevron-back-outline"
                size={30}
                color="black"
              />
            </Pressable>
          ),
        })}
      />

      <stackRoutes.Screen
        name="PurcasheMode"
        component={PurcasheMode}
        options={({ navigation }) => ({
          title: "",
          headerLeft: () => (
            <Pressable
              onPress={() => navigation.goBack()}
              style={{ marginLeft: 25 }}
            >
              <Ionicons
                name="md-chevron-back-outline"
                size={30}
                color="black"
              />
            </Pressable>
          ),
        })}
      />
    </stackRoutes.Navigator>
  );
};

export default AppRoutes;
