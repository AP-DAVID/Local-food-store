import {View, Text, Image} from 'react-native';
import React from 'react';

type Props = {};

const MenuBottom = (props: Props) => {
  return (
    <View className="bg-slate-500 my-2 flex-row justify-between px-2 py-3 rounded-lg">
      <View>
        <Text
          className="text-white text-lg"
          style={{fontFamily: 'Montserrat-Bold'}}>
          Cart
        </Text>
        <Text
          className="text-slate-200"
          style={{fontFamily: 'Montserrat-Regular'}}>
          2 items
        </Text>
      </View>

      <View className="flex-row space-x-2">
        <Image
          source={require('../../../../assets//images/nigeria.jpg')}
          className="object-cover rounded-full h-10 w-10"></Image>
        <Image
          source={require('../../../../assets//images/italian.jpg')}
          className="object-cover rounded-full h-10 w-10"></Image>
      </View>
    </View>
  );
};

export default MenuBottom;
