
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Page2a, Page2b , Page2c, Tiki} from "./pages";
const tab = createBottomTabNavigator();
 const Menu = () => {
  return (
     <>
      <tab.Navigator>
        <tab.Screen name="login" component={Page2a} />
        <tab.Screen name="rating" component={Page2b} />
        <tab.Screen name="password" component={Page2c} />
        <tab.Screen name="tiki" component={Tiki} />
      </tab.Navigator>
     </>
  )
}

export default Menu