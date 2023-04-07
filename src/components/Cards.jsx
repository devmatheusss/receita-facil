import { View, Text, ImageBackground, TouchableOpacity } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Cards = ({ data }) => {
  const navigation = useNavigation();

  const handleNavigate = () => {
    navigation.navigate("Detail", { data: data });
  };

  return (
    <TouchableOpacity
      className="w-full rounded-xl mb-4 h-[172px] overflow-hidden"
      activeOpacity={0.8}
      onPress={handleNavigate}
    >
      <ImageBackground
        source={{ uri: data.cover }}
        resizeMode="cover"
        className="flex-1"
      >
        <LinearGradient
          className="flex-1 rounded-xl p-4 justify-end"
          colors={["transparent", "#121212"]}
          locations={[0.2, 1]}
        >
          <Text className="font-interSemi text-xl text-white mb-2">
            {data.name}
          </Text>
          <View className="flex-row">
            <Text className="text-white">
              {data.total_ingredients} ingredientes | {data.time} minutos
            </Text>
          </View>
        </LinearGradient>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Cards;
