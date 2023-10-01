import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import FistScreen from "./components/firstscreen";
import Page1a from "./components/page_1a";
import Page1b from "./components/page_1b";
import Page1c from "./components/page_1c";
import Page1d from "./components/page_1d";
import Page1e from "./components/page_1e";
import Page2a from "./components/page_2a";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="tuan3">
        <Stack.Screen name="firstscreen" component={FistScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
