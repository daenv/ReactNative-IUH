import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, ProductDetail } from "./screen";
const Stack = createStackNavigator();

const NavigatorScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} options={{}} />
      {/* <Stack.Screen name="ProductDetail" component={ProductDetail} />  */}
    </Stack.Navigator>
  );
};

export default NavigatorScreen;


