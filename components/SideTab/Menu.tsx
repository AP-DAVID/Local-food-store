/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MenuHome from './MenuScreens/MenuHome';

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
    </Stack.Navigator>
  );
};

export default Menu;
