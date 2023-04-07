import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { WebView } from "react-native-webview";

export function VideoView({ handleClose, videoUrl }) {
  return (
    <View className="flex-1 w-full">
      <StatusBar barStyle={"light-content"} backgroundColor="#4CBE6C" />
      <View className="w-full bg-primaryGreen h-12 px-4 justify-center">
        <TouchableOpacity
          className="flex-row items-center"
          onPress={handleClose}
        >
          <Ionicons name="arrow-back" color={"white"} size={24} />
          <Text className="text-white font-interBold text-lg ml-2">Voltar</Text>
        </TouchableOpacity>
      </View>
      <WebView style={{ flex: 1, width: "100%" }} source={{ uri: videoUrl }} />
    </View>
  );
}
