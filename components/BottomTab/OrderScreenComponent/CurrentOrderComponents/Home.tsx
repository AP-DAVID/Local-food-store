/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React, {useContext} from 'react';
import OrderCard from '../PastOrderComponents/OrderCard';

type Props = {
  navigation: {
    navigate: (route: string, query?: any) => void;
  };
};

const Home = ({navigation: {navigate}}: Props) => {
  return (
    <ScrollView style={styles.container}>
      <View style={{backgroundColor: 'white', flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 10,
            paddingHorizontal: 20,
          }}>
          <Text
            className="text-slate-500"
            style={{fontSize: 20, fontFamily: 'Montserrat-SemiBold'}}>
            Your Current Orders
          </Text>
        </View>

        <OrderCard navigate={navigate} />
        <OrderCard navigate={navigate} />
        <OrderCard navigate={navigate} />
        <OrderCard navigate={navigate} />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
