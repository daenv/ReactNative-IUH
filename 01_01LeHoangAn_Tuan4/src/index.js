import { View, Text } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const tab = createBottomTabNavigator();
import Page1 from "./page/page1";
import Page1a from "./page/page1-a";
import Page1b from "./page/page1-b";
import Page1c from "./page/page1-c";
import Page1d from "./page/page1-d";
import Page1e from "./page/page1-e";
import Page2a from "./page/page2-a";
export function Menu() {
  return (
    <>
      <tab.Navigator>
          <tab.Screen name="page1" component={Page1}/>
          <tab.Screen name="page1a" component={Page1a}/>
          <tab.Screen name="page1b" component={Page1b}/>
          <tab.Screen name="page1c" component={Page1c}/>
          <tab.Screen name="page1d" component={Page1d}/>
          <tab.Screen name="page1e" component={Page1e}/>
          <tab.Screen name="page2a" component={Page2a}/>
      </tab.Navigator>
    </>
  );
}
