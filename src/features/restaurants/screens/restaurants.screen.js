import React from "react";
import { StatusBar, SafeAreaView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import styled from "styled-components/native";

import RestaurantInfoCard from "../components/restaurantInfoCard.component";

const SafeArea = styled(SafeAreaView)`
  flex: 1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: ${(props) => props.theme.space[3]};
`;

const RestaurantListContainer = styled.View`
  flex: 1;
  padding: ${(props) => props.theme.space[3]};
`;

export default function RestaurantScreen() {
    return (
        <SafeArea>
            <SearchContainer>
                <Searchbar />
            </SearchContainer>
            <RestaurantListContainer>
                <RestaurantInfoCard />
            </RestaurantListContainer>
        </SafeArea>
    )
}
