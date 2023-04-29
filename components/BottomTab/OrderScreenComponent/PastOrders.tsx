/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';
import OrderCard from './PastOrderComponents/OrderCard';

type Props = {};

const PastOrders = (props: Props) => {
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
            January
          </Text>
          <Text
            className="text-slate-500"
            style={{fontSize: 16, fontFamily: 'Montserrat-Regular'}}>
            4 orders
          </Text>
        </View>

        <OrderCard />
        <OrderCard />
        <OrderCard />
        <OrderCard />
      </View>
    </ScrollView>
  );
};

export default PastOrders;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
