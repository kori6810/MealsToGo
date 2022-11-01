import React from "react";
import styled from "styled-components";
import { View, Text, StyleSheet } from "react-native";
import { Card } from "react-native-paper";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  padding: ${(props) => props.theme.space[3]};
  color: ${(props) => props.theme.colors.ui.primary};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
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
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: photos[0],
        }}
        key={name}
      />
      <Title>{name}</Title>
    </RestaurantCard>
  );
};
