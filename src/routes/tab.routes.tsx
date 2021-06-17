import React, { useState, useEffect } from "react";
import { Platform, Keyboard, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { Home } from "../pages/Home";
import { Extract } from "../pages/Extract";
import { SearchProduct } from "../pages/SearchProduct";

import { theme } from "../styles/colors";

const Tab = createBottomTabNavigator();

const CustomButtomComponent = ({ onPress, children}:any) => {
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    // cleanup function
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  const [keyboardStatus, setKeyboardStatus] = useState('');
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");

  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: keyboardStatus === 'Keyboard Shown' ? 0 : 30 ,
        display: keyboardStatus === 'Keyboard Shown' ? 'none' : 'flex'
      }}
      onPress={onPress}
    >
      <View
        style={{
          top: -10,
          width: 70,
          height: 70,
          borderRadius: 180,
          backgroundColor:
            theme.colors.bottomTab.backgroundCustomButtom,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
}

const BottomRoutes: React.FC = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.bottomTab.activeTintColor,
        inactiveTintColor: theme.colors.bottomTab.inactiveTintColor,
        keyboardHidesTabBar: true,
        showLabel: false,
        style: {
          paddingBottom: 5,
          width: "100%",
          paddingVertical: Platform.OS === "ios" ? 20 : 0,
          height: 70,
          backgroundColor: theme.colors.bottomTab.background,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="home" size={30} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name="Adicionar"
        component={SearchProduct}
        options={{
          tabBarIcon: () => <Feather name="plus" color="#FFF" size={30} />,
          tabBarButton: ({ onPress, children }) => CustomButtomComponent({ onPress, children}) 
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
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomRoutes;
