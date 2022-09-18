import React from "react";
import { View, Text } from "react-native";
import { globalStyles } from "../assets/styles/global";

export default function About(){
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>About Screen</Text>
    </View>
  );
}