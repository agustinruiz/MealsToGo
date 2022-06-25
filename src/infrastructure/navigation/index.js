import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { AccountNavigator } from "./account.navigator";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

// Se crea un wraper llamado navigation ya que la navegacion es muy generica y puede tener deciciones diferentes
// que se deben hacer en la app. Por ahi la navegacion de la app normalmente es AppNavigator que es el core y es
// un tab navigator pero tal vez necesitamos crear nuevos modelos de navegacion cuando la aplicacion arranca y mostrar
// la aapNavigator despues de que pasemos por la autenticacion u otra cosa.
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      {isAuthenticated ? <AppNavigator /> : <AccountNavigator />}
    </NavigationContainer>
  );
};
