import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const InputArea = () => {
  const navigation = useNavigation();
  const [inputValue, setInputValue] = useState("");

  const handleSearch = () => {
    if (!inputValue) return;

    let input = inputValue;
    setInputValue("");
    navigation.navigate("Search", { name: input });
  };

  return (
    <View className="w-full p-2 rounded-lg border border-whiteSmoke bg-white flex-row justify-between mb-4">
      <TextInput
        placeholder="Digite o nome da comida"
        className="flex-1"
        value={inputValue}
        onChangeText={(text) => setInputValue(text)}
      />
      <TouchableOpacity activeOpacity={0.5} onPress={handleSearch}>
        <Ionicons name="search" color={"#4CBE6C"} size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default InputArea;
