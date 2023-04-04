import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

const InputArea = () => {
  return (
    <View className="w-full p-2 rounded-lg border border-whiteSmoke bg-white flex-row justify-between mb-4">
      <TextInput placeholder="Digite o nome da comida" className="flex-1" />
      <TouchableOpacity activeOpacity={0.5}>
        <Ionicons name="search" color={"#4CBE6C"} size={32} />
      </TouchableOpacity>
    </View>
  );
};

export default InputArea;
