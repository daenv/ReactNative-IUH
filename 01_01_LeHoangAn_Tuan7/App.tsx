import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import BottomtabNavigation from "./src/BottomtabNavigation";
export default function App() {
  return (
    <NavigationContainer>
      <BottomtabNavigation />
    </NavigationContainer>
  );
}
