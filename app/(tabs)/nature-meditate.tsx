import {
  FlatList,
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/MeditationData";
import meditationImages from "@/constants/meditation-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditate = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6">
          <Text className="text-gray-200 font-bold text-4xl text-left">
            Welcome
          </Text>
          <Text className="text-indigo-100 text-xl">
            Start Meditation Practise
          </Text>
        </View>
        <View>
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            className="mb-20"
            data={MEDITATION_DATA}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => {
              return (
                <Pressable
                  onPress={() => console.log("press")}
                  className="h-48 my-3 rounded-md overflow-hidden"
                >
                  <ImageBackground
                    style={{ flex: 1 }}
                    source={meditationImages[item.id - 1]}
                    resizeMode="cover"
                    className=" rounded-lg justify-center"
                  >
                    <LinearGradient
                      style={{ flex: 1 }}
                      className=" justify-center items-center"
                      colors={["transparent", "rgba(0,0,0,0.8)"]}
                    >
                      <Text className="text-gray-100 text-3xl font-bold text-center">
                        {item.title}
                      </Text>
                    </LinearGradient>
                  </ImageBackground>
                </Pressable>
              );
            }}
          />
        </View>
      </AppGradient>
      <StatusBar style="light" />
    </View>
  );
};

export default NatureMeditate;

const styles = StyleSheet.create({});
