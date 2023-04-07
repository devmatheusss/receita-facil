import { Text } from "react-native";
import React from "react";

import { View } from "moti";

const Logo = () => {
  return (
    <View
      from={{
        opacity: 0,
        translateX: -50,
      }}
      animate={{
        opacity: 1,
        translateX: 0,
      }}
      transition={{
        type: "spring",
        duration: 850,
      }}
      className="bg-primaryGreen rounded-2xl rounded-br-[50px] px-4 py-2 mb-4"
    >
      <Text className="font-interSemi text-white text-xl">Receita Fácil</Text>
    </View>
  );
};

export default Logo;
