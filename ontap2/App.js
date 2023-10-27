import { StatusBar } from "expo-status-bar";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigatorScreen from "./src/Navigation.jsx";
export default function App() {
  return (
    <NavigationContainer>
      <NavigatorScreen />
    </NavigationContainer>
  );
}
