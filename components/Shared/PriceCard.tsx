import {View, Text} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Textin } from './Reuse';

type Props = {};

const PriceCard = (props: Props) => {
  return (
    <View className="border flex-col px-4 items-center py-4 space-y-3  border-slate-300 rounded-md">
          <View><Icon name="ellipse-outline" size={20} /></View>
          <View><Textin data='Medium' /></View>
          <View><Textin bold data="$12.23"/></View>
    </View>
  );
};

export default PriceCard;
