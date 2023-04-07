import { View, Text } from "react-native";
import React from "react";

export function Instructions({ data }) {
  return (
    <View className="w-full p-2 rounded-xl flex-row">
      <Text className="font-inter text-sm">
        <Text className="font-interBold text-lg">{data.id} - </Text>
        {data.text}
      </Text>
    </View>
  );
}
