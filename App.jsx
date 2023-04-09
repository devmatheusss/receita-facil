import { NavigationContainer } from "@react-navigation/native";
import * as NavigationBar from "expo-navigation-bar";
import { useFonts } from "expo-font";
import "react-native-reanimated";
import "react-native-gesture-handler";
import Routes from "./src/routes";

export default function App() {
  NavigationBar.setBackgroundColorAsync("white");
  NavigationBar.setButtonStyleAsync("dark");

  const [fontsLoaded] = useFonts({
    InterRegular: require("./assets/font/inter/Inter-Regular.ttf"),
    InterSemi: require("./assets/font/inter/Inter-SemiBold.ttf"),
    InterBold: require("./assets/font/inter/Inter-Bold.ttf"),
  });

  if (!fontsLoaded) return null;

  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );
}
