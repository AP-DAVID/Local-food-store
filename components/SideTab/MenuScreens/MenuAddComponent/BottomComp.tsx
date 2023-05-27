import {View, Text} from 'react-native';
import React from 'react';
import {Textin} from 'components/Shared/Reuse';

type Props = {};

const BottomComp = (props: Props) => {
  return (
    <View>
      {/* increment of  what is bought and the total*/}
      <View
        style={{
          flexDirection: 'row',
          display: 'flex',
          justifyContent: 'space-between',
        }}>
        <Text>
          <Textin bold data="Total" /> :{' '}
          <Textin bold classn="text-slate-500" data="$" />{' '}
          <Textin bold data="12.34" />
        </Text>

        <View className="flex-row items-center space-x-3">
          <View className="px-1 border border-slate-400">
            <Textin data="+" />
          </View>
          <View>
            <Textin classn="text-center" data="1" />
          </View>
          <View className="px-1 border border-slate-400">
            <Textin data="-" />
          </View>
        </View>
      </View>
      <View className="bg-slate-500 my-2 flex-row justify-center px-2 py-3 rounded-lg">
        <Textin classn="text-white text-center" data="Add to Cart" />
      </View>
    </View>
  );
};

export default BottomComp;
