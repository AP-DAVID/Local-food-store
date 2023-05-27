import {View, Text, TextInput} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {};

const MenuSearch = (props: Props) => {
  return (
    <View className="py-5" style={{paddingHorizontal: 10}}>
      <View className="flex-row items-center justify-between px-5 py-1 border rounded-md border-slate-400">
        {/* <Text>MenuSearch</Text>  */}
        <View className="flex-row items-center">
          <Icon name="search" size={26} color="grey" />
          <TextInput placeholder="Search Here" />
        </View>

        <View>
          <Icon name="options" size={26} color="grey" />
        </View>
      </View>
    </View>
  );
};

export default MenuSearch;
