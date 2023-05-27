/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import { IconButton } from './Reuse';
import Icon from 'react-native-vector-icons/Ionicons';
import AskModal from './AskModal';

type Props = {};

const HomeScreenHeaderRight = (props: Props) => {
  const [open, setOpen] = useState(false);
  return (
    <View className="flex-row space-x-4 items-center">
      <View className="px-3 py-3 h-1/4 rounded-full bg-slate-500" />
      <AskModal
        YesPress={undefined}
        modalVisible={open}
        setModalVisible={setOpen}
        text="Are you sure you want to log Out ? "
      />
      <IconButton
        Press={() => setOpen(true)}
        Icon={Icon}
        size={25}
        iconName="log-out"
        color="#c6c4d6"
      />
    </View>
  );
};

export default HomeScreenHeaderRight;
