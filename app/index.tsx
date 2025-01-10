import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//for chaning the color of time and wifi
import { StatusBar } from "expo-status-bar";
import React from "react";
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";

const App = () => {
  return (
    <View className="flex-1 ">
      <ImageBackground
        style={{ flex: 1 }}
        source={beachImage}
        resizeMode="cover"
      >
        <LinearGradient
          style={{ flex: 1 }}
          colors={["rgba(0,0,0,0.4)", "transparent"]}
        >
          <SafeAreaView className="flex-1 justify-between mx-5 my-8">
            <View className="  ">
              <Text className=" text-center font-bold text-4xl">
                Simple Meditation
              </Text>
              <Text className=" text-center text-2xl text-white mt-3">
                Simplifying Meditation
              </Text>
            </View>
            <View>
              <CustomButton
                title="Get Started"
                onPress={() => console.log("tap")}
              />
            </View>
            <StatusBar style="light" />
          </SafeAreaView>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
