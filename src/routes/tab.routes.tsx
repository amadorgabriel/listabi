import React from "react";
import { Platform, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { Home } from "../pages/Home";
import { Extract } from "../pages/Extract";
import { SearchProduct } from "../pages/SearchProduct";

const Tab = createBottomTabNavigator();

const BottomRoutes: React.FC = () => {

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: "#66A466",
        inactiveTintColor: "#A8C8A3",
        showLabel: false,
        style: {
          paddingBottom: 5,
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 70,
          backgroundColor: "#D4E8D7",
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) =>  (
              <MaterialCommunityIcons
                name="home-outline"
                size={30}
                color={color}
              />
            )
        }}
      />

      <Tab.Screen
        name="Adicionar"
        component={SearchProduct}
        options={{
          tabBarIcon: () => <Feather name="plus" color="#FFF" size={30} />,
          tabBarButton: ({ onPress, children }) => (
            <TouchableOpacity
              accessibilityRole="button"
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingBottom: 30,
              }}
              onPress={onPress}
            >
              <View
                style={{
                  top: -10,
                  width: 70,
                  height: 70,
                  borderRadius: 180,
                  backgroundColor: "#A8C8A3",
                }}
              >
                {children}
              </View>

            </TouchableOpacity>
          ),
        }}
      />

      <Tab.Screen
        name="Extrato"
        component={Extract}
        options={{
          tabBarIcon: ({ color }) => (
              <MaterialIcons
                name="format-list-bulleted"
                size={30}
                color={color}
              />
            )
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
