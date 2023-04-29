/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text} from 'react-native';
import React from 'react';

type Props = {
    name : string;
};

const Header = ({name}: Props) => {
  return (
    <View style={{flexDirection: 'row', margin: 15}}>
      <Text style={{fontWeight: 'bold', fontSize: 30, color: 'black'}}>
        {name}
      </Text>
    </View>
  );
};

export default Header;
