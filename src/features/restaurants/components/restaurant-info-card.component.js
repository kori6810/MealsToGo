import React from "react";
import styled from "styled-components";
import { View, Text, Image, StyleSheet } from "react-native";
import { Card } from "react-native-paper";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";

import star from "../../../../assets/star";
import open from "../../../../assets/open";

const RestaurantCard = styled(Card)`
  background-color: ${(props) => props.theme.colors.bg.primary};
`;
const RestaurantCardCover = styled(Card.Cover)`
  padding: ${(props) => props.theme.space[3]};
  background-color: white;
`;
const Info = styled(View)`
  padding: ${(props) => props.theme.space[3]};
`;
const Section = styled(View)`
  flex-direction: row;
  align-items: center;
`;
const SectionEnd = styled(View)`
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
const Rating = styled(View)`
  padding-top: ${(props) => props.theme.space[2]};
  padding-bottom: ${(props) => props.theme.space[2]};
  flex-direction: row;
`;
const Title = styled(Text)`
  font-family: ${(props) => props.theme.fonts.heading};
  font-size: ${(props) => props.theme.fontSizes.body};
  color: ${(props) => props.theme.colors.ui.primary};
`;
const Address = styled(Text)`
  font-family: ${(props) => props.theme.fonts.body};
  font-size: ${(props) => props.theme.fontSizes.caption};
`;

export const RestaurantInfoCard = ({ restaurant = {} }) => {
  const {
    name = "Some Restaurant",
    icon = "https://maps.gstatic.com/mapfiles/place_api/icons/v1/png_71/lodging-71.png",
    photos = [
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ],
    address = "6-1 132beon-gil, Sujeong-gu",
    isOpenNow = true,
    rating = 4.5,
    isClosedTemporary = true,
  } = restaurant;
  const ratingArray = Array.from(new Array(Math.floor(rating)));
  // console.log(ratingArray);
  return (
    <RestaurantCard elevation={5}>
      <RestaurantCardCover
        source={{
          uri: photos[0],
        }}
        key={name}
      />
      <Info>
        <Title>{name}</Title>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporary && (
              <Text variant="label" style={{ color: "red" }}>
                CLOSED TEMPORARY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Image style={{ width: 15, height: 15 }} source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{name}</Address>
      </Info>
    </RestaurantCard>
  );
};
