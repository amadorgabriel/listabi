import React, { useState, useEffect } from "react";
import { Keyboard, TouchableOpacity, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//pages
import { Home } from "../pages/Home";
import { Extract } from "../pages/Extract";
import { SearchProduct } from "../pages/SearchProduct";

//theme
import { theme } from "../styles/colors";

//hook
import { useProduct } from "../contexts/ProductContext";

const Tab = createBottomTabNavigator();

const CustomButtomComponent = ({ onPress, children, keyboardStatus }: any) => {
  return (
    <TouchableOpacity
      accessibilityRole="button"
      style={{
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: 30,
        display: "flex",
      }}
      onPress={onPress}
    >
      <View
        style={{
          top: -10,
          width: 70,
          height: 70,
          borderRadius: 25,
          backgroundColor: theme.colors.bottomTab.backgroundCustomButtom,
        }}
      >
        {children}
      </View>
    </TouchableOpacity>
  );
};

const BottomRoutes: React.FC = () => {
  const { modalIsActive } = useProduct();
  const [hideTabBar, setHideTabBar] = useState(false);

  const [keyboardStatus, setKeyboardStatus] = useState("");
  const _keyboardDidShow = () => setKeyboardStatus("Keyboard Shown");
  const _keyboardDidHide = () => setKeyboardStatus("Keyboard Hidden");

  //keyboard hides navbar
  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);

    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  }, []);

  useEffect(() => {
    setHideTabBar(modalIsActive);
  }, [modalIsActive]);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.colors.bottomTab.activeTintColor,
        inactiveTintColor: theme.colors.bottomTab.inactiveTintColor,
        showLabel: false,
        style: {
          height: 70,
          backgroundColor: theme.colors.bottomTab.background,
          position: 'absolute',
          bottom: keyboardStatus === "Keyboard Shown" || hideTabBar ? -120 : 15,
          left: 15,
          right: 15,
          elevation: 0,
          borderRadius: 15,
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
          tabBarButton: ({ onPress, children }) =>
            CustomButtomComponent({ onPress, children }),
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
