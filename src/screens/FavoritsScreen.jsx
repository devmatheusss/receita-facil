import { View, Text, ImageBackground, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { LinearGradient } from "expo-linear-gradient";
import { getFavorites } from "../utils/storage";
import { useIsFocused } from "@react-navigation/native";
import Cards from "../components/Cards";

const FavoritsScreen = () => {
  const [recipes, setRecipes] = useState([]);
  const isFocused = useIsFocused();

  useEffect(() => {
    let isActive = true;

    async function getRecipes() {
      const result = await getFavorites("@appreceitas");
      if (isActive) {
        setRecipes(result);
      }
    }

    if (isActive) {
      getRecipes();
    }

    return () => {
      isActive = false;
    };
  }, [isFocused]);

  return (
    <LinearGradient colors={["#F3F9FF", "white"]} className="flex-1 p-4">
      <Text className="font-interBold text-2xl mb-4">Receitas Favoritas</Text>
      {recipes.length === 0 && (
        <Text>Você ainda não favoritou nenhuma receita!</Text>
      )}
      <FlatList
        showsVerticalScrollIndicator={false}
        data={recipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Cards data={item} />}
      />
    </LinearGradient>
  );
};

export default FavoritsScreen;
