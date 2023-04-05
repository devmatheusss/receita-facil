import { View, Text } from "react-native";
import React, { useLayoutEffect } from "react";
import { useRoute } from "@react-navigation/native";

const DetailScreen = () => {
  const route = useRoute();

  useLayoutEffect(() => {
    console.log(route.params?.data[0].name);
  }, []);

  return (
    <View className="flex-1 justify-center items-center bg-ice">
      <Text className="text-3xl font-interSemi text-black">
        {route.params?.data.name}
      </Text>
    </View>
  );
};

export default DetailScreen;
