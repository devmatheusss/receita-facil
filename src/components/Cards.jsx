import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React from "react";

import { cards } from "../data";
import { LinearGradient } from "expo-linear-gradient";

const Cards = () => {
  return (
    <FlatList
      className="w-full py-4"
      data={cards}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="w-full rounded-xl mb-4 h-[172px] overflow-hidden"
          activeOpacity={0.8}
        >
          <ImageBackground
            source={{ uri: item.img }}
            resizeMode="cover"
            className="flex-1"
          >
            <LinearGradient
              className="flex-1 rounded-xl p-4 justify-end"
              colors={["transparent", "#121212"]}
              locations={[0.2, 1]}
            >
              <Text className="font-interSemi text-xl text-white mb-2">
                {item.title}
              </Text>
              <View className="flex-row">
                <Text className="mr-4 text-white">{item.info.ingredients}</Text>
                <Text className="text-white">{item.info.time}</Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default Cards;
