/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import Profilecard from 'components/Shared/Profilecard';
import Icon from 'react-native-vector-icons/Ionicons';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Profile from './ProfileScreenComponent/Profile';
import EditProfile from './ProfileScreenComponent/EditProfile';

type Props = {};

const Stack = createNativeStackNavigator();

const ProfileScreen = (props: Props) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="ProfilePage"
        component={Profile}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Edit"
        component={EditProfile}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

export default ProfileScreen;
