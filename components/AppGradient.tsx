import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { ReactNode } from "react";
import { LinearGradient } from "expo-linear-gradient";

type Props = {
  children: ReactNode;
  colors: any;
};

const AppGradient = ({ children, colors }: Props) => {
  return (
    <LinearGradient colors={colors} style={{ flex: 1 }}>
      <SafeAreaView className="flex-1 my-8 mx-6">{children}</SafeAreaView>
    </LinearGradient>
  );
};

export default AppGradient;
