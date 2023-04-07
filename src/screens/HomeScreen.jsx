import { StatusBar, FlatList } from "react-native";
import { Text } from "moti";
import React from "react";
import Logo from "../components/Logo";
import InputArea from "../components/InputArea";
import { LinearGradient } from "expo-linear-gradient";
import Cards from "../components/Cards";

import { data } from "../data";

const HomeScreen = () => {
  return (
    <LinearGradient
      className="flex-1 items-start px-4 pt-4"
      colors={["#F3F9FF", "white"]}
    >
      <StatusBar barStyle={"dark-content"} backgroundColor={"#F3F9FF"} />
      <Logo />
      <Text
        from={{
          opacity: 0,
          translateY: 10,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: "spring",
          duration: 800,
          delay: 200,
        }}
        className="font-interBold text-4xl"
      >
        Encontre a receita
      </Text>
      <Text
        from={{
          opacity: 0,
          translateY: 10,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        transition={{
          type: "spring",
          duration: 800,
          delay: 300,
        }}
        className="font-interBold text-4xl mb-4"
      >
        que combina com você
      </Text>
      <InputArea />
      <FlatList
        className="w-full py-4"
        data={data}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => <Cards data={item} />}
        keyExtractor={(item) => String(item.id)}
      />
    </LinearGradient>
  );
};

export default HomeScreen;
