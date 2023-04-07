import { View, Text } from "react-native";
import React from "react";

export function Ingredients({ data }) {
  return (
    <View className="w-full py-4 px-2 bg-white mb-4 rounded-xl flex-row items-center justify-between">
      <Text className="font-interBold text-lg">{data.name}</Text>
      <Text className="font-inter text-sm">{data.amount}</Text>
    </View>
  );
}
