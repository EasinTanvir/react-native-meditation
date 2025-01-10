import { ImageBackground, SafeAreaView, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
//for chaning the color of time and wifi
import { StatusBar } from "expo-status-bar";
import React from "react";
//@ts-ignore
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";

const App = () => {
  const router = useRouter();
  return (
    <View className="flex-1 ">
      <ImageBackground
        style={{ flex: 1 }}
        source={beachImage}
        resizeMode="cover"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "transparent"]}>
          <View className="flex-1 justify-between px-1 ">
            <View className="">
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
                onPress={() => router.push("/nature-meditate")}
              />
            </View>
          </View>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
