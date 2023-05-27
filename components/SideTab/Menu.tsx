/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuHome from './MenuScreens/MenuHome';
import MenuAddToCart from './MenuScreens/MenuAddToCart';

const Stack = createNativeStackNavigator();
type Props = {};

const Menu = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MenuHome"
        component={MenuHome}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MenuAdd"
        component={MenuAddToCart}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Menu;
