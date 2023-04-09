import React from "react";
import { Feather, FontAwesome } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import StackRoutes from "./stackRoutes";
import FavoritesScreen from "../screens/FavoritesScreen";

const Tab = createBottomTabNavigator();

export default function Routes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarHideOnKeyboard: true,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#121212",

        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 0,
          elevation: 0,
        },
      }}
    >
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <Feather
              name={focused ? "home" : "home"}
              color={color}
              size={size}
            />
          ),
        }}
        name="HomeScreen"
        component={StackRoutes}
      />
      <Tab.Screen
        options={{
          tabBarIcon: ({ color, size, focused }) => (
            <FontAwesome
              name={focused ? "heart" : "heart-o"}
              color={focused ? "#FF4141" : color}
              size={size}
            />
          ),
        }}
        name="Favorits"
        component={FavoritesScreen}
      />
    </Tab.Navigator>
  );
}
