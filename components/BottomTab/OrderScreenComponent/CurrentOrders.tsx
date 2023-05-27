import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './CurrentOrderComponents/Home';
import MapMonitor from './CurrentOrderComponents/MapMonitor';

type Props = {};
const Stack = createNativeStackNavigator();

const CurrentOrders = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CurOrderHome"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="MapMonitor"
        component={MapMonitor}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default CurrentOrders;
