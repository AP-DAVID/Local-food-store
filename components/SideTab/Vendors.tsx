/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text} from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VendorHome from './VendorScreens/VendorHome';

const Stack = createNativeStackNavigator();

type Props = {};

const Vendors = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="VendorHome"
        component={VendorHome}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default Vendors;
