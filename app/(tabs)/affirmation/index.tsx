import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirtmationGallery from "@/components/GuidedAffirtmationGallery";

const Affirmation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with affirmations
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((item, i) => (
              <GuidedAffirtmationGallery
                key={i}
                {...item}
                title={item.title}
                previews={item.data}
              />
            ))}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmation;
