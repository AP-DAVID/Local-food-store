/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PastOrders from './OrderScreenComponent/PastOrders';
import CurrentOrders from './OrderScreenComponent/CurrentOrders';

const Tab = createMaterialTopTabNavigator();
type Props = {};

const OrderScreen = (props: Props) => {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Past"
        component={PastOrders}
        options={{
          title: 'Past Orders',
          tabBarLabelStyle: {
            fontFamily: 'Montserrat-ExtraBold',
          },
          tabBarActiveTintColor: '#b3afd4',
          tabBarIndicatorStyle: {
            backgroundColor: '#b3afd4',
          },
        }}
      />
      <Tab.Screen
        name="Current"
        component={CurrentOrders}
        options={{
          title: 'Current Orders',
          tabBarLabelStyle: {
            fontFamily: 'Montserrat-ExtraBold',
          },
          tabBarActiveTintColor: '#b3afd4',
          tabBarIndicatorStyle: {
            backgroundColor: '#b3afd4',
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default OrderScreen;
