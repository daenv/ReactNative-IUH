import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './page/screen1';
import Screen2 from './page/screen2';
import Screen3 from './page/screen3';
import Screen4 from './page/screen4';
import Product from './model/product';

const Stack = createNativeStackNavigator();

const productData: Product  = {
  name: 'Tên sản phẩm',
  ratingCount: 120,
  price: 499.99,
  colors: ['blue', 'red', 'green'],
  title: undefined
};
const StackNavigator = () =>{
  return (
    <Stack.Navigator>
      <Stack.Screen name="Screen1" component={Screen1} initialParams={{product: productData}} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
      <Stack.Screen name="Screen4" component={Screen4} />
    </Stack.Navigator>
  )
}
export default StackNavigator;