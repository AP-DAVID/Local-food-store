/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, Pressable} from 'react-native';
import React from 'react';
import { Textin } from './Reuse';

type Props = {
  press: any;
  Icon: any;
  color: string | undefined;
  text: string;
  iconName: string;
};

const Profilecard = ({press, Icon, color, text, iconName}: Props) => {
  return (
    <Pressable
      onPress={press}
      className="border-b py-4 flex-row space-x-10 border-slate-300 ">
      <Icon name={iconName} size={20} color={color} />
      <Textin classn=" ml-2" data={text} />
    </Pressable>
  );
};

export default Profilecard;
