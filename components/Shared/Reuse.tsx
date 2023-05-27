/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */

import {
  Text,
  TextInput,
  KeyboardTypeOptions,
  Pressable,
  View,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

// import {
//   MaterialCommunityIcons,
//   MaterialIcons,
//   AntDesign,
//   FontAwesome5,
// } from "@expo/vector-icons";

type Props = {
  Keyboard: KeyboardTypeOptions | undefined;
  placeholder: string;
  className: string | undefined;
  secure: boolean;
  onChange: any | undefined;
  blur: any | undefined;
  value: any | undefined;
};

// TextInput
export const Textinput = ({
  Keyboard,
  placeholder,
  value,
  className,
  secure,
  onChange,
  blur,
}: Props) => {
  return (
    <TextInput
      onChangeText={onChange}
      onBlur={blur}
      style={{fontFamily: 'Montserrat-Regular'}}
      keyboardType={Keyboard}
      value={value}
      secureTextEntry={secure}
      placeholder={placeholder}
      className={`text-black ${className} bg-white h-14 mt-4 mx-2 px-2 rounded-md`}
    />
  );
};

type Propss = {
  className: string | undefined;
  onPress: any;
  text: string;
  activity: boolean | undefined;
};

// Button
export const Button = ({className, onPress, text, activity}: Propss) => {
  return (
    <Pressable
      onPress={onPress}
      className="mx-2 px-2 py-2 bg-green-500  mt-4 rounded-md">
      {activity ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <Text
          style={{fontFamily: 'Montserrat-Regular'}}
          className={`text-white font-semibold ${className} text-lg rounded-md cursor-pointer hover:bg-blue-500 text-center py-3 `}>
          {text}
        </Text>
      )}
    </Pressable>
  );
};

type IconButtonProps = {
  className: string | undefined;
  onPress: any;
  text: string;
  activity: boolean | undefined;
  Icon : any;
  IconName : string;
  color : string;
};

// Button
export const IconButtonPress = ({className, onPress, text, activity, Icon, IconName, color}: IconButtonProps) => {
  return (
    <Pressable
      onPress={onPress}
      className={`mx-2 px-1 py-1 ${color}   mt-4 rounded-xl`}>
      {activity ? (
        <ActivityIndicator size="small" color="#fff" />
      ) : (
        <View className='flex-row space-x-2 justify-center items-center'>
          <Icon name={IconName} size={20} color="white"/>
          <Text
            style={{fontFamily: 'Montserrat-Regular'}}
            className={`text-white font-semibold ${className} text-lg rounded-md cursor-pointer hover:bg-blue-500 text-center py-3 `}>
            {text}
          </Text>
        </View>
      )}
    </Pressable>
  );
};



type IconProps = {
  Icon: any;
  color: string | undefined;
  iconName: string;
  Press: any;
  size : number;
};

// Button
export const IconButton = ({iconName, Icon, color, Press, size}: IconProps) => {
  return (
    <Pressable
      onPress={Press}
      className="mx-2 px-2 bg-white shadow-xl my-2  rounded-md">
      <Icon name={iconName} size={size} color={color} />
    </Pressable>
  );
};

// Text
type TextProps = {
  classn?: string | undefined;
  data: string;
  bold?: boolean | undefined;
};

export const Textin = ({classn, data, bold}: TextProps) => {
  return (
    <Text
      className={`${classn}`}
      style={{fontFamily: bold ? "Montserrat-Bold" : "Montserrat-Regular"}}>
      {data}
    </Text>
  );
};

// Pressable Text
type TextPropss = {
  classn: string | undefined;
  data: string;
  onPress: any | undefined;
};

export const PressText = ({classn, data, onPress}: TextPropss) => {
  return (
    <Pressable onPress={onPress}>
      <Text
        className={`${classn} font-extrabold`}
        style={{fontFamily: 'Montserrat-Regular'}}>
        {data}
      </Text>
    </Pressable>
  );
};

type SocialProps = {
  Icon: any;
  color: string | undefined;
  text: string;
  iconName: string;
  Press: any;
};
export const Social = ({Icon, color, text, iconName, Press}: SocialProps) => {
  return (
    <Pressable
      onPress={Press}
      className="bg-white mt-2 h-14 px-4 space-x-3 flex-row justify-start rounded-md mx-2 py-1 items-center">
      <Icon name={iconName} size={20} color={color} />
      <Textin classn="text-black ml-2 font-extrabold" data={text} />
    </Pressable>
  );
};
