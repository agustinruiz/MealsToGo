import React from "react";
import styled from "styled-components/native";
import { StatusBar, SafeAreaView, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

// StatusBar.currentHeight fue algo que agrgegamos especialmente para android por lo que para IOS no va a andar
// por ello con templates strings puedo agregar una condicion y que si StatusBar.currentHeight es nulo(IOS) no ponga
// la linea de margin-top.
// Por lo que con la siguiente linea: ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
// le estoy diciendo que si StatusBar.currentHeight tiene un valor pone la linea de margin-top. con esto no rompe en IOS
const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;

const SearchContainer = styled(View)`
  padding: 16px;
`;

const RestaurantListContainer = styled(View)`
  flex: 1;
  padding: 16;
  background-color: "blue";
`;

export const RestaurantsScreen = () => (
  <SafeArea>
    <SearchContainer>
      <Searchbar />
    </SearchContainer>
    <RestaurantListContainer>
      <RestaurantInfoCard />
    </RestaurantListContainer>
  </SafeArea>
);
