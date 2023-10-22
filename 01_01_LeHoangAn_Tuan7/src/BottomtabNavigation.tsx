
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen1 from './screen/Screen1';
import Screen2 from './screen/Screen2';
import Screen3 from './screen/Screen3';
const Tab = createNativeStackNavigator();

const BottomtabNavigation = () => {
  return (
    <Tab.Navigator>
          <Tab.Screen name='Screen1' component={Screen1}  />
           <Tab.Screen name='Screen2' component={Screen2}/>
            <Tab.Screen name='Screen3' component={Screen3}/>    
    </Tab.Navigator>
  )
}

export default BottomtabNavigation

