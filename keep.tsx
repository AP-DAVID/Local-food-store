/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import React from 'react';

type Props = {};

interface Order {
  id: string;
  date: string;
  status: string;
}

const orders: Order[] = [
  {
    id: '001',
    date: 'April 26, 2023',
    status: 'Delivered',
  },
  {
    id: '002',
    date: 'April 25, 2023',
    status: 'Cancelled',
  },
  {
    id: '003',
    date: 'April 24, 2023',
    status: 'In Transit',
  },
];

const OrderScreen = (props: Props) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Current Orders</Text>
      {orders.map(order => {
        if (order.status === 'Delivered') {
          return null;
        }
        return (
          <View style={styles.order} key={order.id}>
            <Text style={styles.orderId}>Order ID: {order.id}</Text>
            <Text style={styles.orderDate}>Date: {order.date}</Text>
            <Text style={styles.orderStatus}>Status: {order.status}</Text>
          </View>
        );
      })}
      <Text style={styles.title}>Past Orders</Text>
      {orders.map(order => {
        if (order.status !== 'Delivered') {
          return null;
        }
        return (
          <View style={styles.order} key={order.id}>
            <Text style={styles.orderId}>Order ID: {order.id}</Text>
            <Text style={styles.orderDate}>Date: {order.date}</Text>
            <Text style={styles.orderStatus}>Status: {order.status}</Text>
          </View>
        );
      })}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  order: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
  },
  orderId: {
    fontWeight: 'bold',
    marginBottom: 5,
  },
  orderDate: {
    fontStyle: 'italic',
    marginBottom: 5,
  },
  orderStatus: {
    color: '#666',
  },
});

export default OrderScreen;
