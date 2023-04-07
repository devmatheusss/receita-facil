import {
  Text,
  Pressable,
  TouchableOpacity,
  ImageBackground,
  ScrollView,
  View,
  Modal,
} from "react-native";
import React, { useLayoutEffect, useState } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { FontAwesome } from "@expo/vector-icons";
import { Ingredients } from "../components/Ingredients";
import { Instructions } from "../components/Instructions";
import { VideoView } from "../components/VideoView";
import { isFavorite, removeItem, saveFavorite } from "../utils/storage";
import { LinearGradient } from "expo-linear-gradient";

const DetailScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();

  const [showModal, setShowModal] = useState(false);
  const [favorite, setFavorite] = useState(false);

  useLayoutEffect(() => {
    async function getStatusFavorite() {
      const recipeFavorite = await isFavorite(route.params?.data);
      setFavorite(recipeFavorite);
    }

    getStatusFavorite();

    navigation.setOptions({
      title: route.params?.data
        ? route.params?.data.name
        : "Detalhes da receita",
      headerRight: () => (
        <Pressable onPress={() => handleFavoriteRecipe(route.params?.data)}>
          <FontAwesome
            name={favorite ? "heart" : "heart-o"}
            size={24}
            color="#FF4141"
          />
        </Pressable>
      ),
    });
  }, [navigation, route.params?.data, favorite]);

  async function handleFavoriteRecipe(recipe) {
    if (favorite) {
      await removeItem(recipe.id);
      setFavorite(false);
    } else {
      await saveFavorite("@appreceitas", recipe);
      setFavorite(true);
    }
  }

  return (
    <ScrollView className="flex-1 ">
      <LinearGradient className="flex-1 p-4" colors={["#F3F9FF", "white"]}>
        <ImageBackground
          source={{ uri: route.params?.data.cover }}
          className="w-full h-44 rounded-xl justify-center items-center overflow-hidden mb-4"
        >
          <TouchableOpacity onPress={() => setShowModal(true)}>
            <FontAwesome name="play-circle-o" size={52} color="white" />
          </TouchableOpacity>
        </ImageBackground>
        <Text className="font-interBold text-lg">
          {route.params?.data.name}
        </Text>
        <Text className="font-inter text-lg mb-4">
          Ingredientes ({route.params?.data.total_ingredients})
        </Text>
        {route.params?.data.ingredients.map((item) => (
          <Ingredients key={item.id} data={item} />
        ))}
        <View className="w-full p-2 rounded-xl bg-primaryGreen my-4">
          <Text className="text-white font-interBold text-lg">
            Modo de preparo
          </Text>
        </View>
        <View className="w-full">
          {route.params?.data.instructions.map((item) => (
            <Instructions key={item.id} data={item} />
          ))}
        </View>

        <Modal visible={showModal} animationType="slide">
          <VideoView
            handleClose={() => setShowModal(false)}
            videoUrl={route.params?.data.video}
          />
        </Modal>
      </LinearGradient>
    </ScrollView>
  );
};

export default DetailScreen;
