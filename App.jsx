import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import FavoritsScreen from "./src/screens/FavoritsScreen";
import HomeScreen from "./src/screens/HomeScreen";

const Tab = createBottomTabNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    InterRegular: require("./assets/font/inter/Inter-Regular.ttf"),
    InterSemi: require("./assets/font/inter/Inter-SemiBold.ttf"),
    InterBold: require("./assets/font/inter/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
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
              <Ionicons
                name={focused ? "home" : "home-outline"}
                color={color}
                size={size}
              />
            ),
          }}
          name="Home"
          component={HomeScreen}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Ionicons
                name={focused ? "heart" : "heart-outline"}
                color={focused ? "#FF4141" : color}
                size={size}
              />
            ),
          }}
          name="Favorits"
          component={FavoritsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
