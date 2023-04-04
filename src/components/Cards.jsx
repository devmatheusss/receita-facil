import {
  View,
  Text,
  FlatList,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import api from "../api";

const Cards = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function fetchAPI() {
    api
      .get("/foods")
      .then((res) => setData(res.data))
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    fetchAPI();
  }, []);

  console.log(data);
  return (
    <FlatList
      className="w-full py-4"
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          className="w-full rounded-xl mb-4 h-[172px] overflow-hidden"
          activeOpacity={0.8}
        >
          <ImageBackground
            source={{ uri: item.cover }}
            resizeMode="cover"
            className="flex-1"
          >
            <LinearGradient
              className="flex-1 rounded-xl p-4 justify-end"
              colors={["transparent", "#121212"]}
              locations={[0.2, 1]}
            >
              <Text className="font-interSemi text-xl text-white mb-2">
                {item.name}
              </Text>
              <View className="flex-row">
                <Text className="text-white">
                  {item.total_ingredients} | {item.time}
                </Text>
              </View>
            </LinearGradient>
          </ImageBackground>
        </TouchableOpacity>
      )}
      keyExtractor={(item) => String(item.id)}
    />
  );
};

export default Cards;
