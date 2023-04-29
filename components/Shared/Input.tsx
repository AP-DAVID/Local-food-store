/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Textin } from './Reuse';

type Props = {
  iconName : string;
  placeholder : string;
  area : boolean;
  lines : number | undefined;
};

const Input = ({iconName, placeholder, area, lines} : Props) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <View
      style={[
        styles.inputContainer,
        isFocused ? styles.inputContainerFocused : styles.inputContainerBlurred,
      ]}
      className={`w-4/5 ${area ? "h-24" : "h-16"} my-2 overflow-x-hidden`}>
      <Icon color="#aaa6a6" name={iconName} size={20} style={styles.icon} />
      <View style={styles.separator} />
      <View className="flex-col items-start">
        {isFocused && <Textin classn="text-slate-400" data={placeholder} />}
        <TextInput
          className="text-slate-600"
          multiline={area}
          numberOfLines={lines}
          style={styles.input}
          placeholder={placeholder}
          onFocus={handleFocus}
          onBlur={handleBlur}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D9D9D9',
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  inputContainerFocused: {
    borderColor: '#2196F3',
    borderWidth: 2,
  },
  inputContainerBlurred: {
    borderColor: '#D9D9D9',
    borderWidth: 1,
  },
  icon: {
    marginRight: 10,
  },
  separator: {
    height: '100%',
    width: 1,
    backgroundColor: '#D9D9D9',
    marginHorizontal: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    fontFamily : "Montserrat-Regular",
    paddingVertical: 0,
  },
});

export default Input;
