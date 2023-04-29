/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {View, Text, ActivityIndicator, Button} from 'react-native';
import auth from '@react-native-firebase/auth';

type Props = {
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};

const Start = ({navigation: {navigate}}: Props) => {
  useEffect(() => {
    auth().onAuthStateChanged(user => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(user)
        navigate('News');
        // ...
      } else {
        // User is signed out
        // ...
        navigate('Home');
      }
    });
  // eslint-disable-next-line no-sparse-arrays
  });

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Start Screen</Text>
      <ActivityIndicator size="small" />
    </View>
  );
};

export default Start;
