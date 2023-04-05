import { createNativeStackNavigator } from "@react-navigation/native-stack";

import HomeScreen from "../screens/HomeScreen";
import DetailScreen from "../screens/DetailScreen";
import SearchScreen from "../screens/SearchScreen";

export default function StackRoutes() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Detail"
        component={DetailScreen}
        options={{ title: "Detalhes da receita" }}
      />
      <Stack.Screen
        name="Search"
        component={SearchScreen}
        options={{ title: "Veja o que encontramos" }}
      />
    </Stack.Navigator>
  );
}
