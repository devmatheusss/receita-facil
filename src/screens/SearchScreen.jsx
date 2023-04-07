import { View, Text, FlatList } from "react-native";
import React, { useEffect, useState } from "react";
import { useRoute } from "@react-navigation/native";
import Cards from "../components/Cards";

import { data } from "../data";

const SearchScreen = () => {
  const route = useRoute();
  const [recipes, setRecipes] = useState(data);

  const inputValue = route.params?.name;

  const filteredRecipes = recipes.filter((item) =>
    item.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <View className="flex-1 p-4">
      <FlatList
        data={filteredRecipes}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <Cards data={item} />}
        ListEmptyComponent={() => (
          <View className="flex-1 justify-center items-center">
            <Text className="font-interBold text-2xl text-center">
              Não encontramos nenhuma receita com a sua busca.
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default SearchScreen;
