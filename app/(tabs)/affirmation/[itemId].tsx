import AppGradient from "@/components/AppGradient";
import { useLocalSearchParams } from "expo-router";
import { View, Text } from "react-native";

const AffirmationPractice = () => {
  const { itemId } = useLocalSearchParams();

  return (
    <AppGradient colors={[]}>
      <Text>{itemId}</Text>
    </AppGradient>
  );
};

export default AffirmationPractice;
