import React from "react";
// La navegacion por stack son ventanas apareciendo una sobre otra.
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => {
  return (
    <RestaurantStack.Navigator
      screenOptions={{
        headerShown: false,
        ...TransitionPresets.ModalPresentationIOS,
      }}
    >
      <RestaurantStack.Screen // La primer screen que aparece en el stack es la que se renderiza primero. LAs subsecuentes se renderizan como modulos
        name="RestaurantsList"
        //Al poner Restaurant Screen en el campo componente automaticamente recibe el prop navigate
        //para que dentro de restaurant screen pueda navegar a las distintas pantallas del stack.
        component={RestaurantsScreen}
      />
      <RestaurantStack.Screen
        name="RestaurantDetail"
        // Los componentes tambien reciben el parametro route para traerse informacion del que los llama.
        component={RestaurantDetailScreen}
      />
    </RestaurantStack.Navigator>
  );
};
