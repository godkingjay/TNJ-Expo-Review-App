import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { globalStyles } from "../assets/styles/global";

export default function Home({ navigation }){

  const [reviews, setReviews] = useState([
    { key: '1', title: "Zelda: Breath of Fresh Air", rating: 5, body: 'lorem ipsum' },
    { key: '2', title: "Gotta Catch Them All(again)", rating: 4, body: 'lorem ipsum' },
    { key: '3', title: 'Not so "Final" Fantasy', rating: 3, body: 'lorem ipsum' },
    { key: '4', title: "Hunter Monster", rating: 5, body: 'lorem ipsum'},
  ]);

  return (
    <View style={globalStyles.container}>
      <FlatList
        keyExtractor={reviews.key}
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}