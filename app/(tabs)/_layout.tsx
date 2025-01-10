import React from "react";
import { Tabs } from "expo-router";
import { MaterialCommunityIcons, Entypo } from "@expo/vector-icons";

import Colors from "@/constants/Colors";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      <Tabs.Screen
        name="nature-meditate"
        options={{
          tabBarLabel: "Meditate",
          tabBarIcon: ({ color }) => {
            return (
              <MaterialCommunityIcons
                name="flower-tulip"
                size={24}
                color={color}
              />
            );
          },
        }}
      />
      <Tabs.Screen
        name="affirmation"
        options={{
          tabBarLabel: "Affirmation",
          tabBarIcon: ({ color }) => {
            return <Entypo name="open-book" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};

export default TabsLayout;
