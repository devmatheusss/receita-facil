import { View, Text, StatusBar } from "react-native";
import React from "react";
import Logo from "../components/Logo";
import InputArea from "../components/InputArea";
import { LinearGradient } from "expo-linear-gradient";
import Cards from "../components/Cards";

const HomeScreen = () => {
  return (
    <View className="flex-1">
      <StatusBar barStyle={"dark-content"} backgroundColor={"#F3F9FF"} />
      <LinearGradient
        className="flex-1 items-start p-4"
        colors={["#F3F9FF", "white"]}
      >
        <Logo />
        <Text className="font-interBold text-4xl mb-4">
          Encontre a receita que combina com você
        </Text>
        <InputArea />
        <Cards />
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;
