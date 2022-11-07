import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { SvgXml } from "react-native-svg";
import { Spacer } from "../../../components/spacer/spacer.component";
import { Text } from "../../../components/typography/text.component";
import star from "../../../../assets/star";
import open from "../../../../assets/open";
import {
  RestaurantCard,
  RestaurantCardCover,
  Info,
  Section,
  SectionEnd,
  Rating,
  Address,
  Icon,
} from "./restaurant-info-card.styles.js";

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
        <Text variant="label">{name}</Text>
        <Section>
          <Rating>
            {ratingArray.map(() => (
              <SvgXml xml={star} width={20} height={20} />
            ))}
          </Rating>
          <SectionEnd>
            {isClosedTemporary && (
              <Text variant="caption" style={{ color: "red" }}>
                CLOSED TEMPORARY
              </Text>
            )}
            <Spacer position="left" size="large">
              {isOpenNow && <SvgXml xml={open} width={20} height={20} />}
            </Spacer>
            <Spacer position="left" size="large">
              <Icon source={{ uri: icon }} />
            </Spacer>
          </SectionEnd>
        </Section>
        <Address>{name}</Address>
      </Info>
    </RestaurantCard>
  );
};
