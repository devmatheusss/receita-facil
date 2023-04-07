import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useFonts } from "expo-font";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import "react-native-reanimated";
import "react-native-gesture-handler";

import FavoritsScreen from "./src/screens/FavoritsScreen";
import StackRoutes from "./src/routes/stackRoutes";

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
          component={FavoritsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
