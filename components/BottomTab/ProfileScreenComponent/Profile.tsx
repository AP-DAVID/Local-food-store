/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Avatar} from '@rneui/themed';
import Profilecard from 'components/Shared/Profilecard';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};

const Profile = ({navigation: {navigate}}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View className="flex-col items-center py-10">
        <View style={styles.circle}>
          {/* The avatar and edit icon */}
          <Avatar
            size={95}
            rounded
            source={{uri: 'https://randomuser.me/api/portraits/women/57.jpg'}}
            title="Bj"
            containerStyle={{backgroundColor: 'transparent'}}>
            <Avatar.Accessory
              onPress={() => {
                navigate('Edit');
              }}
              size={35}
            />
          </Avatar>
        </View>

        {/* The name and emaiil */}
        <View className="py-2 flex-col mb-20 items-center">
          <Text
            className="text-slate-600 tracking-wider"
            style={{fontFamily: 'Montserrat-SemiBold'}}>
            Akintola Abiodun
          </Text>
          <Text
            className="text-slate-500 tracking-wider font-serif"
            style={{fontFamily: 'Montserrat-Regular'}}>
            akintolaapre@gmail.com
          </Text>
        </View>

        {/* The profile activities */}
        <View className="px-2 py-2 w-screen">
          <Profilecard
            Icon={Icon}
            press={undefined}
            iconName="flower-outline"
            color="grey"
            text="My Orders"
          />
          <Profilecard
            Icon={Icon}
            press={undefined}
            iconName="call-outline"
            color="grey"
            text="Contact Us"
          />
          <Profilecard
            Icon={Icon}
            press={undefined}
            iconName="shield-outline"
            color="grey"
            text="Privacy Policy"
          />
          <Profilecard
            Icon={Icon}
            press={undefined}
            iconName="terminal-outline"
            color="grey"
            text="Terms and Conditions"
          />
          <Profilecard
            Icon={Icon}
            press={undefined}
            iconName="car-sport-outline"
            color="grey"
            text="Delivery Address"
          />
          <Profilecard
            Icon={Icon}
            press={undefined}
            iconName="log-out-outline"
            color="grey"
            text="Log out"
          />
        </View>
      </View>
    </ScrollView>
  );
};

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

export default Profile;
