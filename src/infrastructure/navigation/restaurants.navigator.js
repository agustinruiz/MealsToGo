import React from "react";
import { Text } from "react-native";
// La navegacion por stack son ventanas apareciendo una sobre otra.
import { createStackNavigator } from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator screenOptions={{ headerShown: false }}>
      <RestaurantStack.Screen
        name="RestaurantsList"
        //Al poner Restaurant Screen en el campo componente automaticamente recibe el prop navigate
        //para que dentro de restaurant screen pueda navegar a las distintas pantallas del stack.
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        component={() => <Text>Restauran Detail</Text>}
      />
    </RestaurantStack.Navigator>
  );
};
