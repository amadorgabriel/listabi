import React from "react";
import { Platform } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Home } from "../pages/Home";
import { Extract } from "../pages/Extract";
import { SearchProduct } from "../pages/SearchProduct";

const bottomTab = createBottomTabNavigator();

const BottomRoutes: React.FC = () => {
  return (
    <bottomTab.Navigator
      tabBarOptions={{
        activeTintColor: "#66A466",
        inactiveTintColor: "#3f573f",
        style: {
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 60,
        },
      }}
    >
      <bottomTab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <bottomTab.Screen
        name="Adicionar"
        component={SearchProduct}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="add-circle-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <bottomTab.Screen
        name="Extrato"
        component={Extract}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons
              name="format-list-bulleted"
              size={size}
              color={color}
            />
          ),
        }}
      />
    </bottomTab.Navigator>
  );
};


export default BottomRoutes