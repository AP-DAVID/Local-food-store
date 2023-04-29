/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import {Appbar} from 'react-native-paper';
import {Avatar} from '@rneui/themed';
import Icon from 'react-native-vector-icons/Ionicons';
import {IconButtonPress, Textin} from 'components/Shared/Reuse';
import Input from 'components/Shared/Input';

type Props = {
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};

const EditProfile = ({navigation: {navigate}}: Props) => {
  // Define a new component that wraps the Icon component
  return (
    <View style={styles.container}>
      <Appbar.Header>
        <Appbar.BackAction
          onPress={() => {
            navigate('ProfilePage');
          }}
        />
      </Appbar.Header>
      <ScrollView style={styles.container}>
        <View className="flex-col items-center py-5 ">
          {/* The edit picture place */}
          <View style={styles.circle}>
            {/* The avatar and edit icon */}
            <Avatar
              size={95}
              rounded
              source={{uri: 'https://randomuser.me/api/portraits/women/57.jpg'}}
              title="Bj"
              containerStyle={{backgroundColor: 'transparent'}}>
              <Avatar.Accessory size={35} />
            </Avatar>
          </View>

          {/* The form text */}
          <Textin
            classn="text-sm text-slate-400 py-7"
            data="Share a little bit about yourself"
          />

          {/* The form to edit */}
          <Input
            iconName="person-add"
            area={false}
            lines={undefined}
            placeholder="Full Name"
          />
          <Input
            iconName="mail"
            area={false}
            lines={undefined}
            placeholder="Email"
          />
          <Input
            iconName="newspaper"
            area={true}
            lines={7}
            placeholder="Delivery Address"
          />
          <Input
            iconName="phone-portrait-outline"
            area={false}
            lines={undefined}
            placeholder="Phone number"
          />

          {/* <View className="w-screen"> */}
          <IconButtonPress
            Icon={Icon}
            IconName="sync-outline"
            color="bg-slate-600 w-4/5"
            activity={undefined}
            className="text-white"
            onPress={undefined}
            text="Update"
          />
          {/* </View> */}
        </View>
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  circle: {
    paddingHorizontal: 5,
    paddingVertical: 5,
    borderRadius: 70,
    borderColor: 'grey',
    borderStyle: 'dashed',
    borderWidth: 5,
    borderDashOffset: 2,
    borderDashArray: [5, 15], // update the first value to make the dashes shorter
    alignItems: 'center',
    justifyContent: 'center',
  },
});
