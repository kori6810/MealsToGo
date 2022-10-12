import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

export const RestaurantInfo = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon,
    photos = [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    address = "6-1 132beon-gil, Sujeong-gu",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporary,
  } = restaurant;
  return (
    <Card style={styles.card}>
      <Card.Cover
        source={{
          uri: photos[0],
        }}
        key={name}
        style={styles.cover}
      />
      <Text>{name}</Text>
    </Card>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
  },
  cover: {
    padding: 20,
    backgroundColor: "white",
  },
});
