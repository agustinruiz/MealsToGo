import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// StatusBar.currentHeight fue algo que agrgegamos especialmente para android por lo que para IOS no va a andar
// por ello con templates strings puedo agregar una condicion y que si StatusBar.currentHeight es nulo(IOS) no ponga
// la linea de margin-top.
// Por lo que con la siguiente linea: ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`}
// le estoy diciendo que si StatusBar.currentHeight tiene un valor pone la linea de margin-top. con esto no rompe en IOS
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
